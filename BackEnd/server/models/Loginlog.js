// In models/Loginlog.js
const mongoose = require("mongoose");

const LoginLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // Only required for successful logins or when user exists but credentials are wrong
    required: function () {
      return (
        this.status === "success" || (this.userName && this.userName.length > 0)
      );
    },
  },
  userName: {
    type: String,
    // Only required when user exists
    required: function () {
      return (
        this.status === "success" ||
        (this.userId && this.userId.toString().length > 0)
      );
    },
  },
  email: {
    type: String,
    required: true, // Email should always be available
  },
  userRole: {
    type: String,
    // Only required when user exists
    required: function () {
      return (
        this.status === "success" ||
        (this.userId && this.userId.toString().length > 0)
      );
    },
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

module.exports = mongoose.model("LoginLog", LoginLogSchema);
