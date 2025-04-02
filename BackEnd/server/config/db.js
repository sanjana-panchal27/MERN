// db.js - Server-side MongoDB connection
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Increase timeouts and add connection pool settings
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yourdbname', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // Increase timeout for server selection
      socketTimeoutMS: 45000, // Increase socket timeout
      connectTimeoutMS: 30000, // Connection establishment timeout
      maxPoolSize: 10, // Increase connection pool size
      family: 4 // Use IPv4, skip trying IPv6
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
    // Set up connection error handler for ongoing monitoring
    mongoose.connection.on('error', err => {
      console.error('MongoDB connection error:', err);
      // Don't exit process, just log and attempt to reconnect
      console.log('Attempting to reconnect to MongoDB...');
    });
    
    // Set up disconnection handler
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected, attempting to reconnect...');
      setTimeout(connectDB, 5000);
    });
    
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Don't exit immediately, try to reconnect
    console.log('Attempting to reconnect in 5 seconds...');
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;