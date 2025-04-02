// In models/LoginSignup.js
const mongoose = require("mongoose");

const LoginSignupSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: function () {
      return this.status === "success";
    }, // Only required for successful logins
  },
  userName: {
    type: String,
    required: function () {
      return this.status === "success";
    }, // Only required for successful logins
  },
  email: {
    type: String,
    required: true, // Email should always be available
  },
  userRole: {
    type: String,
    required: function () {
      return this.status === "success";
    }, // Only required for successful logins
  },
  status: {
    type: String,
    enum: ["success", "failed"],
    required: true,
  },
  ipAddress: String,
  userAgent: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("LoginLog", LoginSignupSchema);
