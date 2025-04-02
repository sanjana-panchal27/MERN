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

module.exports = router;
