// models/Student.js
const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userName: { type: String, required: true },
  rollNumber: {
    type: String,
    trim: true,
  },
  program: {
    type: String,
    trim: true,
  },
  department: {
    type: String,
    trim: true,
  },
  graduationYear: {
    type: Number,
  },
  skills: [String],
  resume: {
    type: String, // URL to resume file
  },
  projects: [
    {
      title: String,
      description: String,
      link: String,
    },
  ],
  education: [
    {
      institution: String,
      degree: String,
      field: String,
      startDate: Date,
      endDate: Date,
      grade: String,
    },
  ],
  experience: [
    {
      company: String,
      position: String,
      description: String,
      startDate: Date,
      endDate: Date,
    },
  ],
  placementStatus: {
    type: String,
    enum: ["Not Applied", "Applied", "In Process", "Placed"],
    default: "Not Applied",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
