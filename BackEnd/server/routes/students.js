//test data?
const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
  res.status(200).json({ message: "Student profile" });
});

router.put("/profile", (req, res) => {
  res.status(200).json({ message: "Profile updated" });
});

router.get("/student-dashboard", (req, res) => {
  res.status(200).json({ message: "Dashboard data" });
});

module.exports = router;