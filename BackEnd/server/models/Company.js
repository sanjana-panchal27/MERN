const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    required: true,
    default: 'company', // Set default to 'company'
  },
  // other fields
});

module.exports = mongoose.model('Company', companySchema);
