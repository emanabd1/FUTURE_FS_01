import { Router } from "express";
import nodemailer from "nodemailer";
import Contact from "../models/Contact.js";
import { required } from "../middleware/validate.js";

const router = Router();

router.post(
  "/",
  required(["name", "email", "message"]),
  async (req, res) => {
    console.log("\n================ CONTACT REQUEST ================");
    console.log("Request received!");
    console.log("Body:", req.body);

    try {
      const { name, email, subject, message } = req.body;

      // 1. Check environment variables
      console.log("Checking SMTP configuration...");

      console.log("SMTP_HOST:", process.env.SMTP_HOST);
      console.log("SMTP_PORT:", process.env.SMTP_PORT);
      console.log("SMTP_USER:", process.env.SMTP_USER);
      console.log(
        "SMTP_PASS exists:",
        Boolean(process.env.SMTP_PASS)
      );
      console.log(
        "CONTACT_TO_EMAIL:",
        process.env.CONTACT_TO_EMAIL
      );

      if (
        !process.env.SMTP_HOST ||
        !process.env.SMTP_USER ||
        !process.env.SMTP_PASS ||
        !process.env.CONTACT_TO_EMAIL
      ) {
        console.error("❌ SMTP configuration is missing");

        return res.status(500).json({
          success: false,
          message: "Email service is not configured",
        });
      }

      // 2. Save message to MongoDB
      console.log("Saving contact message to MongoDB...");

      const item = await Contact.create({
        name,
        email,
        subject,
        message,
      });

      console.log("✅ Message saved:", item._id);

      // 3. Create Nodemailer transporter
      console.log("Creating email transporter...");

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: Number(process.env.SMTP_PORT || 587) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      // 4. Verify Gmail SMTP
      console.log("Verifying Gmail SMTP connection...");

      await transporter.verify();

      console.log("✅ SMTP connection verified");

      // 5. Send email
      console.log("Sending email...");

      const info = await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_TO_EMAIL,
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

      console.log("✅ EMAIL SENT!");
      console.log("Message ID:", info.messageId);

      return res.status(201).json({
        success: true,
        message: "Message sent successfully",
        id: item._id,
      });
    } catch (error) {
      console.error("\n❌❌❌ CONTACT ERROR ❌❌❌");
      console.error("Name:", error.name);
      console.error("Message:", error.message);
      console.error("Code:", error.code);
      console.error("Full error:", error);
      console.error("============================================\n");

      return res.status(500).json({
        success: false,
        message: error.message || "Message could not be sent",
      });
    }
  }
);

export default router;