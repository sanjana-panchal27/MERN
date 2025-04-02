// students.js (controllers)
const Student = require("../models/Student"); // Assuming you have a Student model

// Controller methods
const studentController = {
  // Login controller
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Find student in database
      const student = await Student.findOne({ user: req.body.userId }).populate("user");


      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      // Validate password (assuming you're using bcrypt or similar)
      const isMatch = await student.comparePassword(password);

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Set session
      req.session.user = {
        id: student._id,
        role: "student",
        email: student.email,
      };

      // Redirect to dashboard
      res.status(200).json({
        message: "Login successful",
        redirect: "/student/student-dashboard",
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // Get dashboard data
  getDashboard: async (req, res) => {
    try {
      const studentId = req.session.user.id;

      // Get student data including courses, assignments, etc.
      const studentData = await Student.findById(studentId)
        .populate("courses")
        .populate("assignments");

      res.status(200).json({
        message: "Dashboard data retrieved successfully",
        data: {
          student: studentData,
          notifications: [], // You can populate this from another collection
          upcomingAssignments: [], // Calculate this based on assignments
          // Other dashboard data...
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // Get profile
  getProfile: async (req, res) => {
    try {
      const studentId = req.session.user.id;
      const profile = await Student.findById(studentId);

      res.status(200).json({
        message: "Profile retrieved successfully",
        profile,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },

  // Update profile
  updateProfile: async (req, res) => {
    try {
      const studentId = req.session.user.id;
      const updates = req.body;

      // Update profile
      const updatedProfile = await Student.findByIdAndUpdate(
        studentId,
        updates,
        { new: true }
      );

      res.status(200).json({
        message: "Profile updated successfully",
        profile: updatedProfile,
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  },
};

module.exports = studentController;
