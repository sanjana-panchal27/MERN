// reset-password.js
// Run this with: node reset-password.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// Connect to MongoDB
const dbURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/your-database-name";
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });

// Import User model
const User = require("./models/User");

async function resetPassword(email, newPassword) {
  try {
    // Find the user
    const user = await User.findOne({ email });

    if (!user) {
      console.log(`User with email ${email} not found!`);
      return false;
    }

    console.log(`Found user: ${user.name} (${user.email}), role: ${user.role}`);
    console.log(`Current password hash: ${user.password}`);

    // Generate new password hash
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update user's password
    user.password = hashedPassword;
    await user.save();

    console.log(`Password for ${user.email} reset successfully!`);
    console.log(`New password hash: ${hashedPassword}`);
    console.log(`User can now login with password: ${newPassword}`);

    return true;
  } catch (error) {
    console.error("Error resetting password:", error);
    return false;
  } finally {
    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  }
}

// Get email and new password from command line arguments or use defaults
const email = process.argv[2] || "sana@gmail.com";
const newPassword = process.argv[3] || "password123";

// Execute the password reset
resetPassword(email, newPassword)
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("Script error:", err);
    process.exit(1);
  });
