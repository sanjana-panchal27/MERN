// auth.js
import axios from "axios";

const API_URL = "http://localhost:5050/api/auth";

// Using module pattern instead of class to avoid instantiation issues
const authService = {
  // Test connection to API
  testConnection: async () => {
    try {
      const response = await axios.get(`${API_URL}/test`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error("Network error");
    }
  },

  // Login user
  login: async (email, password, userType) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
        userType,
      });

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error("Login failed");
    }
  },

  // Register user
  signup: async (name, email, password, userType) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name,
        email,
        password,
        userType,
      });

      return response.data;
    } catch (error) {
      throw error.response
        ? error.response.data
        : new Error("Registration failed");
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem("user");
  },

  // Get current user
  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem("user"));
  },
};

export default authService;
