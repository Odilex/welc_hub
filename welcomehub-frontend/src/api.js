// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Your backend server URL

// Signup function
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data; // Handle errors
  }
};

// Login function
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data; // Should contain the token
  } catch (error) {
    throw error.response.data;
  }
};
