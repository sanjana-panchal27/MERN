import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import authService from '../../components/utils/auth';
import './Login.css';

const LoginSignup = () => {
  const [action, setAction] = useState('Login'); // Default to login
  const [userType, setUserType] = useState('Student'); // Dropdown state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [apiStatus, setApiStatus] = useState('Checking API connection...');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Test API connection on component mount
  useEffect(() => {
    const testApi = async () => {
      try {
        // First check if the server is running at all
        const mainApiResponse = await fetch('http://localhost:5050/');
        if (mainApiResponse.ok) {
          try {
            // Then check if the auth routes are working
            const testResponse = await authService.testConnection();
            setApiStatus(`API connected: ${testResponse.message || 'Success'}`);
          } catch (err) {
            setApiStatus(
              'Main API is running, but auth routes are not available'
            );
            console.error('Auth API test failed:', err);
          }
        } else {
          setApiStatus('API server is running but returned an error');
        }
      } catch (err) {
        setApiStatus(
          'Failed to connect to API. Please check if server is running.'
        );
        console.error('API connection test failed:', err);
      }
    };

    testApi();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
  
    if (action === 'Sign Up') {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        setIsLoading(false);
        return;
      }
  
      try {
        const response = await fetch('http://localhost:5050/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password, userType }),
        });
  
        const data = await response.json();
        console.log("Signup response:", data);
  
        if (response.ok) {
          alert("Signup successful! You can now log in.");
          setAction("Login");
        } else {
          setError(data.message || "Signup failed.");
        }
      } catch (error) {
        console.error("Signup error:", error);
        setError("Signup failed.");
      } finally {
        setIsLoading(false);
      }
  
      return; // Stop here after signup
    }
  
    // Proceed with login
    try {
      const response = await fetch('http://localhost:5050/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, userType }),
      });
  
      const data = await response.json();
      console.log("Login response:", data);
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        navigate(`/${data.role}-dashboard`);
      } else {
        setError(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setError("Authentication failed. Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div
          className="api-status"
          style={{
            fontSize: '12px',
            color: apiStatus.includes('connected') ? 'green' : 'red',
          }}
        >
          {apiStatus}
        </div>
      </div>
      {error && <div className="error-message">{error}</div>}
      <form className="hero-inputs" onSubmit={handleSubmit}>
        {action === 'Sign Up' ? null : (
          <div className="hero-input">
            <label>Select User Type:</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="Company">Company</option>
            </select>
          </div>
        )}
        {action === 'Login' ? null : (
          <div className="hero-input">
            <FaUser className="icon" />
            <input
              className="login-input"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="hero-input">
          <FaEnvelope className="icon" />
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="hero-input">
          <FaLock className="icon" />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {action === 'Sign Up' && (
          <div className="hero-input">
            <FaLock className="icon" />
            <input
              className="login-input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        )}
        {action === 'Login' && (
          <div className="forgot-password">
            Forgot password?<span> Click here</span>
          </div>
        )}
        <div className="submit-container">
          {action === 'Login' ? (
            <button
              type="button"
              className="submit signup-btn"
              onClick={() => setAction('Sign Up')}
            >
              Sign Up
            </button>
          ) : (
            <button
              type="button"
              className="submit login-btn"
              onClick={() => setAction('Login')}
            >
              Login
            </button>
          )}

          <button
            type="submit"
            className="submit"
            disabled={isLoading || apiStatus.includes('Failed')}
          >
            {isLoading ? 'Processing...' : action}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
