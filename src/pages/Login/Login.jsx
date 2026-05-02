import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
        const mainApiResponse = await fetch('http://localhost:5050/');
        if (mainApiResponse.ok) {
          try {
            const testResponse = await authService.testConnection();
            setApiStatus(`API connected: ${testResponse.message || 'Success'}`);
          } catch (err) {
            setApiStatus('Main API is running, but auth routes are not available');
            console.error('Auth API test failed:', err);
          }
        } else {
          setApiStatus('API server is running but returned an error');
        }
      } catch (err) {
        setApiStatus('Failed to connect to API. Please check if server is running.');
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
        setError('Passwords do not match');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch('http://localhost:5050/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, password, userType }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('Signup successful! You can now log in.');
          setAction('Login');
        } else {
          setError(data.message || 'Signup failed.');
        }
      } catch (error) {
        console.error('Signup error:', error);
        setError('Signup failed.');
      } finally {
        setIsLoading(false);
      }
      return; 
    }

    // Proceed with login
    try {
      const response = await fetch('http://localhost:5050/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, userType }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);
        navigate(`/${data.role}-dashboard`);
      } else {
        setError(data.message || 'Invalid email or password.');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setError('Authentication failed. Invalid email or password.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAction = () => {
    setAction(action === 'Login' ? 'Sign Up' : 'Login');
    setError('');
  };

  return (
    <div className="login-wrapper">
      <div className="login-background-overlay"></div>
      
      <motion.div 
        className="login-container glass"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="login-header">
          <motion.h2 
            key={action}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="login-title text-gradient"
          >
            {action}
          </motion.h2>
          <div className="login-underline"></div>
          
          <div 
            className="api-status-pill"
            style={{ 
              backgroundColor: apiStatus.includes('connected') ? 'rgba(74, 222, 128, 0.2)' : 'rgba(248, 113, 113, 0.2)',
              color: apiStatus.includes('connected') ? '#4ade80' : '#f87171'
            }}
          >
            {apiStatus.includes('connected') ? 'API Connected' : 'API Error'}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="error-message"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <form className="login-form" onSubmit={handleSubmit}>
          <AnimatePresence mode="popLayout">
            {action === 'Login' && (
              <motion.div 
                key="userType-login"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="input-group select-group"
              >
                <label>Login As:</label>
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="login-select"
                >
                  <option value="Student">Student</option>
                  <option value="Admin">Admin</option>
                  <option value="Company">Company</option>
                </select>
              </motion.div>
            )}

            {action === 'Sign Up' && (
              <motion.div 
                key="userType-signup"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="input-group select-group"
              >
                <label>Register As:</label>
                <select
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  className="login-select"
                >
                  <option value="Student">Student</option>
                  <option value="Company">Company</option>
                </select>
              </motion.div>
            )}

            {action === 'Sign Up' && (
              <motion.div 
                key="name"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="input-group"
              >
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={action === 'Sign Up'}
                />
              </motion.div>
            )}

            <motion.div 
              layout
              className="input-group"
            >
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            <motion.div 
              layout
              className="input-group"
            >
              <FaLock className="input-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </motion.div>

            {action === 'Sign Up' && (
              <motion.div 
                key="confirmPassword"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="input-group"
              >
                <FaLock className="input-icon" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required={action === 'Sign Up'}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {action === 'Login' && (
            <motion.div layout className="forgot-password">
              <NavLink to="/forgot-password">Forgot password?</NavLink>
            </motion.div>
          )}

          <motion.div layout className="submit-container">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="primary-btn"
              disabled={isLoading || apiStatus.includes('Failed')}
            >
              {isLoading ? 'Processing...' : action}
            </motion.button>
          </motion.div>

          <motion.div layout className="toggle-action">
            {action === 'Login' ? "Don't have an account? " : "Already have an account? "}
            <span onClick={toggleAction} className="toggle-link">
              {action === 'Login' ? 'Sign Up' : 'Login'}
            </span>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginSignup;
