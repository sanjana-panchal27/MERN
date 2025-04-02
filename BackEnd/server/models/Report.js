const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
  title: String,
  summary: String,
});

module.exports = mongoose.model("Report", ReportSchema);
