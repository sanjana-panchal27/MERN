const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  adminName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Admin", AdminSchema);
