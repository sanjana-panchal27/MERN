const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./server/routes/auth");
const adminRoutes = require("./server/routes/adminRoutes");
const companyRoutes = require("./server/routes/companyRoutes");
const studentRoutes = require("./server/routes/students");
const reportsRoutes = require("./server/routes/reportsRoutes");
const feedbackRoutes = require("./server/routes/feedbackRoutes");

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Debug middleware - log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Simple test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Use auth routes
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/admins", adminRoutes);
app.use("/api/companies", companyRoutes);

// Connect to MongoDB - fixed connection string
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/RUPlacementCell")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Handle 404 errors for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.url} not found` });
});

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));