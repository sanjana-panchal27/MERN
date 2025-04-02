const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Make sure you have this model
const LoginLog = require("../models/Loginlog");

// Login route
// Modified section of your auth.js route file

router.post("/login", async (req, res) => {
  try {
    const { email, password, userType } = req.body;

    console.log("Login attempt details:", {
      email,
      passwordProvided: !!password,
      passwordLength: password ? password.length : 0,
      userType
    });

    // Find user in database
    const user = await User.findOne({ email });
    
    if (!user) {
      console.log("Login failed: User not found");
      return res.status(401).json({ 
        message: "Authentication failed. Invalid email or password." 
      });
    }
    
    console.log("User found details:", {
      id: user._id,
      role: user.role,
      hasPassword: !!user.password,
      passwordHashLength: user.password ? user.password.length : 0
    });
    
    // REMOVE THE USER TYPE CHECK FOR NOW - focus on password first
    // We'll add it back after fixing the password issue
    
    // Verify password
    try {
      // Log original input for debugging
      console.log("Password comparison inputs:", {
        providedPassword: password ? "********" : "empty",
        storedHash: user.password ? user.password.substring(0, 10) + "..." : "empty"
      });
      
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("Password match result:", isMatch);

      if (!isMatch) {
        console.log("Login failed: Password mismatch");
        return res.status(401).json({ 
          message: "Authentication failed. Invalid password." 
        });
      }
    } catch (bcryptError) {
      console.error("bcrypt compare error:", bcryptError);
      return res.status(500).json({ 
        message: "Error verifying password." 
      });
    }

    console.log("Password validated successfully!");

    // Create JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "1h" }
    );

    console.log("Login successful, token created");

    // Return successful response
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});