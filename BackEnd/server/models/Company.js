const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  companyName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Company", CompanySchema);