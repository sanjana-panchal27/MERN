const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");

// GET admin profile by userId
router.get("/profile/:userId", async (req, res) => {
  try {
    const admin = await Admin.findOne({ userId: req.params.userId });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(admin);
  } catch (error) {
    console.error("Admin profile fetch error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT update admin profile
router.put("/profile/:userId", async (req, res) => {
  try {
    const updatedAdmin = await Admin.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true }
    );
    if (!updatedAdmin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(updatedAdmin);
  } catch (error) {
    console.error("Admin profile update error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
