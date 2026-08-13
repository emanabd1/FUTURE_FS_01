const personalContext = `
You are Eman Abdulsemed's professional AI assistant on her portfolio website.
Answer questions accurately based ONLY on the following facts about Eman:
- Full Name: Eman Abdulsemed
- Education: Software Engineering student at Adama Science and Technology University (ASTU), expected graduation in 2028.
- Technical Skills: MERN Stack (MongoDB, Express, React, Node.js), JavaScript, Python, C++, Tailwind CSS, Figma, UI/UX Design.
- Projects: 
  1. Role-Based Management System
  2. Task Manager REST API
  3. Job Sphere
  4. Bootcamp Management System
  5. RAG AI Chatbot
  6. To-Do App
  7. Color Palette Picker & Toggle Component
  8. Social Proof Section
- UI/UX Work: Daily UI challenges (1-30), wireframes, and UX case studies.
- Certificates: Full Stack Development by CSEC, Data Literacy, and AI Literacy.
- Professional Goal: Looking for full-stack web development opportunities and internships.
`;

async function getRAGResponse(userPrompt) {
    const promptLower = userPrompt.toLowerCase();
    
    if (promptLower.includes('project') || promptLower.includes('built')) {
        return "Eman has built a wide range of projects including a Role-Based Management System, Task Manager REST API, Job Sphere, Bootcamp Management System, RAG AI Chatbot, To-Do App, Color Palette Picker, Toggle component, and a Social Proof section!";
    } else if (promptLower.includes('ui') || promptLower.includes('ux') || promptLower.includes('design') || promptLower.includes('figma')) {
        return "Eman has extensive UI/UX design experience, completing Daily UI challenges from 1 to 30, building wireframes, and creating comprehensive UX case studies using Figma and Canva.";
    } else if (promptLower.includes('certificate') || promptLower.includes('certified')) {
        return "Eman holds professional certifications in Full Stack Development by CSEC, Data Literacy, and AI Literacy.";
    } else if (promptLower.includes('education') || promptLower.includes('university') || promptLower.includes('astu')) {
        return "Eman is a software engineering student at Adama Science and Technology University (ASTU), expecting to graduate in 2028.";
    } else if (promptLower.includes('skill') || promptLower.includes('stack')) {
        return "Eman specializes in the MERN stack (MongoDB, Express, React, Node.js), JavaScript, Python, C++, Tailwind CSS, and UI/UX design.";
    } else {
        return `Eman Abdulsemed is a software engineering student at ASTU (class of 2028) and a full-stack developer skilled in the MERN stack, UI/UX design, and AI integrations. Feel free to ask about her projects, UI/UX work, or certificates!`;
    }
}

module.exports = { personalContext, getRAGResponse };