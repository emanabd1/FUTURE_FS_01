import { Router } from "express";
import { Resend } from "resend";
import Contact from "../models/Contact.js";
import { required } from "../middleware/validate.js";

const router = Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post(
  "/",
  required(["name", "email", "message"]),
  async (req, res) => {
    console.log("\n================ CONTACT REQUEST ================");
    console.log("Request received!");
    console.log("Body:", req.body);

    try {
      const { name, email, subject, message } = req.body;

      if (!process.env.RESEND_API_KEY) {
        console.error("❌ RESEND_API_KEY is missing");

        return res.status(500).json({
          success: false,
          message: "Email service is not configured",
        });
      }

      if (!process.env.CONTACT_TO_EMAIL) {
        console.error("❌ CONTACT_TO_EMAIL is missing");

        return res.status(500).json({
          success: false,
          message: "Contact email is not configured",
        });
      }

      // Save contact message to MongoDB
      const item = await Contact.create({
        name,
        email,
        subject,
        message,
      });

      console.log("✅ Message saved:", item._id);

      // Send email through Resend
      const { data, error } = await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL],
        replyTo: email,
        subject: subject || `Portfolio contact from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Subject: ${subject || "No subject"}

Message:
${message}
        `,
      });

      if (error) {
        console.error("❌ Resend error:", error);

        return res.status(500).json({
          success: false,
          message: error.message || "Email could not be sent",
        });
      }

      console.log("✅ EMAIL SENT!");
      console.log("Resend ID:", data?.id);

      return res.status(201).json({
        success: true,
        message: "Message sent successfully",
        id: item._id,
      });
    } catch (error) {
      console.error("❌ CONTACT ERROR:", error);

      return res.status(500).json({
        success: false,
        message: error.message || "Message could not be sent",
      });
    }
  }
);

export default router;