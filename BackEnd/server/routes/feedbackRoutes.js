const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

// POST route to submit feedback
router.post("/submit", async (req, res) => {
    try {
        const { companyName, feedback, rating } = req.body;

        // Validate input
        if (!companyName || !feedback || !rating) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create feedback entry
        const newFeedback = new Feedback({
            companyName,
            feedback,
            rating
        });

        await newFeedback.save();
        res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET route to retrieve all feedback
router.get("/all", async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
