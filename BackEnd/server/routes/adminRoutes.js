const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

// Get all admins
router.get("/", async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: "Error fetching admins", error });
  }
});

// Get admin profile
router.get("/profile", (req, res) => {
  res.status(200).json({ message: "Admin profile" });
});

// Update admin profile
router.put("/profile", (req, res) => {
  res.status(200).json({ message: "Profile updated" });
});

// Get admin dashboard data
router.get("/admin-dashboard", (req, res) => {
  res.status(200).json({ message: "Dashboard data" });
});

module.exports = router;