const express = require("express");
const router = express.Router();
const Report = require("../models/Report"); // ✅ Correct Model Import

// GET all reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json({ success: true, data: reports });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
});

// POST new report
router.post("/", async (req, res) => {
  try {
    const newReport = new Report(req.body);
    await newReport.save();
    res
      .status(201)
      .json({ success: true, message: "Report added successfully!" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add report",
      error: error.message,
    });
  }
});

module.exports = router;
