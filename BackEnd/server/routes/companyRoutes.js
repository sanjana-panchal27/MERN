const express = require("express");
const router = express.Router();
const Company = require("../models/Company");

// Get all companies
router.get("/", async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: "Error fetching companies", error });
  }
});

// Get company profile
router.get("/profile", (req, res) => {
  res.status(200).json({ message: "Company profile" });
});

// Update company profile
router.put("/profile", (req, res) => {
  res.status(200).json({ message: "Profile updated" });
});

// Get company dashboard data
router.get("/company-dashboard", (req, res) => {
  res.status(200).json({ message: "Dashboard data" });
});

module.exports = router;