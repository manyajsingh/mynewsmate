import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    age: '',
    email: '',
    phone: '',
    parentEmail: '',
    parentPhone: '',
    password: '',
  });

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? '/login' : '/signup';
      const response = await axios.post(`http://localhost:5000${url}`, formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="login-signup-container">
      <div className="form-toggle">
        <button
          className={`toggle-btn ${isLogin ? 'active' : ''}`}
          onClick={handleToggle}
        >
          Login
        </button>
        <button
          className={`toggle-btn ${!isLogin ? 'active' : ''}`}
          onClick={handleToggle}
        >
          Signup
        </button>
      </div>

      <form onSubmit={handleFormSubmit}>
        {!isLogin && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleInputChange}
              required
            />
            {formData.age < 18 ? (
              <>
                <input
                  type="email"
                  name="parentEmail"
                  placeholder="Parent's Email"
                  value={formData.parentEmail}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="parentPhone"
                  placeholder="Parent's Phone Number"
                  value={formData.parentPhone}
                  onChange={handleInputChange}
                  required
                />
              </>
            ) : (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </>
        )}
        {isLogin && (
          <>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
    </div>
  );
};

export default LoginSignup;
