const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    companyName: { type: String, required: true },
    feedback: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
}, { timestamps: true });

module.exports = mongoose.model("Feedback", feedbackSchema);
