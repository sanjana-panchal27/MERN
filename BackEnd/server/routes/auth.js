//handles login for all User Types

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Student = require("../models/Student");
const Company = require("../models/Company");
const Admin = require("../models/Admin");
const LoginLog = require("../models/Loginlog");

// Test route to verify API is working
router.get("/test", (req, res) => {
  res.json({ message: "Auth API is working" });
});

// signup route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, userType } = req.body;

    console.log("Registration attempt for:", email, "as", userType);

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    user = new User({
      name,
      email,
      password, // This will be replaced with hashed password below
      role: userType,
    });

    // Hash password - ensure this is working correctly
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    console.log("Hashed password created:", !!user.password);

    // Save user to database
    await user.save();
    // IMPORTANT: This should be the ONLY place where you create role-specific records
    try {
      if (user.role.toLowerCase() === "student") {
        const student = new Student({
          userId: user._id,
          userName: user.name,
          email: user.email,
          userRole: user.role,
        });
        await student.save();
        console.log("✅ Student record created for:", user.email);
      } else if (user.role.toLowerCase() === "company") {
        const company = new Company({
          userId: user._id,
          companyName: user.name,
          email: user.email,
          userRole: user.role,
        });
        await company.save();
        console.log("✅ Company record created for:", user.email);
      } else if (user.role.toLowerCase() === "admin") {
        const admin = new Admin({
          userId: user._id,
          adminName: user.name,
          email: user.email,
          userRole: user.role,
        });
        await admin.save();
        console.log("✅ Admin record created for:", user.email);
      }
    } catch (typeError) {
      console.error(`❌ Error creating ${user.role} record:`, typeError);
      // Continue with registration even if this fails
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1h" }
    );

    res.status(201).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password, userType } = req.body;

  try {
    console.log("Login attempt for:", email, "as", userType);

    const user = await User.findOne({ email });
    console.log("User found:", user ? true : false);

    if (!user || user.role.toLowerCase() !== userType.toLowerCase()) {
      console.log("Invalid email or userType mismatch");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      console.log("Invalid password");
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token, role: user.role });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
