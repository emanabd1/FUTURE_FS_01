import express from "express";
import portfolioData from "../data/portfolioData.js";

const router = express.Router();

/*
  Calculate how relevant each portfolio document
  is to the user's question.
*/
function calculateScore(question, document) {
  const text = `
    ${document.title}
    ${document.content}
  `.toLowerCase();

  const words = question
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 2);

  let score = 0;

  for (const word of words) {
    if (text.includes(word)) {
      score++;
    }
  }

  return score;
}

/*
  Generate an answer from the portfolio information.
*/
function generateAnswer(question, context) {
  const q = question.toLowerCase();

  if (
    q.includes("who is eman") ||
    q.includes("about eman") ||
    q.includes("tell me about eman")
  ) {
    return `Eman Abdulsemed is a full-stack developer and UI/UX designer who builds modern web applications and digital experiences. Eman works with React, Vite, Node.js, Express.js, MongoDB and Figma, and is also exploring AI and RAG applications.`;
  }

  if (
    q.includes("project") ||
    q.includes("projects") ||
    q.includes("built") ||
    q.includes("made")
  ) {
    return `Eman's projects include a Bootcamp Management System, Job Sphere, Task Manager, To-Do App, Role Based Management System, RAG AI Chatbot, Color Palette, Toggle Component, Social Proof Section, Daily UI work, wireframes and a UX case study.`;
  }

  if (
    q.includes("skill") ||
    q.includes("skills") ||
    q.includes("technology") ||
    q.includes("technologies") ||
    q.includes("tech stack")
  ) {
    return `Eman's main technical skills include React, Vite, JavaScript, HTML, CSS, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, Git, GitHub and Figma. Eman is also exploring RAG and AI applications.`;
  }

  if (
    q.includes("certificate") ||
    q.includes("certificates")
  ) {
    return `Eman has certificates in Full Stack Development from CSEC, Data Literacy and AI Literacy.`;
  }

  if (
    q.includes("ui") ||
    q.includes("ux") ||
    q.includes("design") ||
    q.includes("figma")
  ) {
    return `Eman's UI/UX work includes Daily UI 1-30, wireframes and a UX case study. Eman also created a Color Palette project, Toggle Component and Social Proof Section using Figma.`;
  }

  if (
    q.includes("bootcamp") ||
    q.includes("attendance") ||
    q.includes("session") ||
    q.includes("feedback")
  ) {
    return `Eman worked on a Bootcamp Management System that manages bootcamp operations such as users, divisions, bootcamps, sessions, attendance, tasks, projects and feedback. It uses React, Node.js, Express.js, MongoDB and Mongoose.`;
  }

  if (
    q.includes("rag") ||
    q.includes("ai chatbot") ||
    q.includes("ai assistant")
  ) {
    return `Eman is building a RAG AI chatbot for the portfolio. It is designed to answer specific questions about Eman's projects, skills, certificates, UI/UX work and development experience.`;
  }

  if (context) {
    return `Here's what I found in Eman's portfolio:\n\n${context}`;
  }

  return `I can answer questions about Eman's projects, skills, certificates, UI/UX work and development experience.`;
}

/*
  POST /api/chat
*/
router.post("/", async (req, res) => {
  try {
    console.log("CHAT REQUEST:", req.body);

    /*
      Accept message, question or prompt.
      This prevents frontend/backend naming mismatch.
    */
    const message =
      req.body.message ||
      req.body.question ||
      req.body.prompt ||
      "";

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        message: "Please provide a message.",
      });
    }

    const cleanMessage = message.trim();

    if (!cleanMessage) {
      return res.status(400).json({
        success: false,
        message: "Message cannot be empty.",
      });
    }

    /*
      RAG RETRIEVAL
    */
    const results = portfolioData
      .map((document) => ({
        ...document,
        score: calculateScore(cleanMessage, document),
      }))
      .filter((document) => document.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    const context = results
      .map((item) => item.content.trim())
      .join("\n\n");

    /*
      Generate answer
    */
    const reply = generateAnswer(cleanMessage, context);

    return res.status(200).json({
      success: true,
      reply,
      sources: results.map((item) => item.title),
    });
  } catch (error) {
    console.error("CHAT ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong with the AI assistant.",
    });
  }
});

export default router;