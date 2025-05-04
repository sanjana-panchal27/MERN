const express = require("express");
const router = express.Router();
const Company = require("../models/Company");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// POST company login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the company by email
    const company = await Company.findOne({ email });

    console.log("Login attempt for:", email);
    console.log("Company found:", !!company);

    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    console.log("Company userType:", company.userType);

    // Ensure userType is 'company'
    if (company.userType !== 'company') {
      return res.status(400).json({ message: "Invalid email or userType mismatch" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, company.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign(
      { companyId: company._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Respond with token
    res.status(200).json({ token, message: "Login successful" });
  } catch (error) {
    console.error("Company login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
