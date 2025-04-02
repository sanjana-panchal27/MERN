// controllers/auth.js
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Student = require("../models/Student");
const Company = require("../models/Company");
const Admin = require("../models/Admin");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, userType } = req.body;

// Check if user already exists
const existingUser = await User.findOne({ email });
if (existingUser) {
  return next(new ErrorResponse("User already exists", 400));
}


  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);


  // Create user
  const user = await User.create({
    name,
    email,
     password: hashedPassword,
    role: userType.toLowerCase(), // Save the role as 'student', 'company', or 'admin'
  });




  // Create corresponding profile based on userType
  if (userType === "Student") {
    await Student.create({
      user: user._id,
    });
  } else if (userType === "Company") {
    await Company.create({
      user: user._id,
    });
  } else if (userType === "Admin") {
    await Admin.create({
      user: user._id,
    });
  }

  // Send token response
  sendTokenResponse(user, 201, res);
});



  // If user is a student, create a student profile
//   if (userType === "Student") {
//     await Student.create({
//       user: user._id,
//     });
//   }

//   sendTokenResponse(user, 201, res);
// });

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password, userType } = req.body;

  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // Check if user type matches
  if (user.userType !== userType) {
    return next(new ErrorResponse(`Invalid user type for this account`, 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = asyncHandler(async (req, res, next) => {
  let userData = await User.findById(req.user.id);

  // If student, include student data
  if (userData.userType === "Student") {
    const studentData = await Student.findOne({ user: req.user.id });
    res.status(200).json({
      success: true,
      data: {
        user: userData,
        studentDetails: studentData,
      },
    });
  } else {
    res.status(200).json({
      success: true,
      data: userData,
    });
  }
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  res.status(statusCode).json({
    success: true,
    token,
    userType: user.userType,
    userId: user._id,
  });
};
