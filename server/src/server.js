import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import chatRoutes from "./routes/chatRoutes.js";
import contactRoutes from "./routes/contact.js";
import projectRoutes from "./routes/projects.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// -------------------------
// Database
// -------------------------

connectDB();

// -------------------------
// Middleware
// -------------------------

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------------------------
// Test route
// -------------------------

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running",
  });
});

// -------------------------
// Health check
// -------------------------

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "API is healthy",
    port: PORT,
  });
});

// -------------------------
// Chat
// -------------------------

app.use("/api/chat", chatRoutes);

// -------------------------
// Contact
// -------------------------

app.use("/api/contact", contactRoutes);

// -------------------------
// Projects
// -------------------------

app.use("/api/projects", projectRoutes);

// -------------------------
// 404
// -------------------------

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

// -------------------------
// Error handler
// -------------------------

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

// -------------------------
// Start server
// -------------------------

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});