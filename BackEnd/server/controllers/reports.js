const Report = require("../models/Report");

// Get all performance records
exports.getReportData = async (req, res) => {
  try {
    const data = await Report.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add new performance data
exports.addReportData = async (req, res) => {
  try {
    const newRecord = new Report(req.body);
    await newRecord.save();
    res.status(201).json({ message: "Reports data added successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
