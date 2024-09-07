const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Simulate a user database
const users = [];

// Signup route
app.post('/signup', async (req, res) => {
  const { name, username, age, phone, email, password, parentPhone, parentEmail } = req.body;

  // Check if username already exists
  const existingUser = users.find(user => user.username === username);
  if (existingUser) return res.status(400).json({ message: 'Username already taken!' });

  // Password hashing
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user data
  const newUser = {
    name,
    username,
    age,
    phone: age >= 18 ? phone : parentPhone,
    email: age >= 18 ? email : parentEmail,
    password: hashedPassword
  };
  users.push(newUser);
  res.status(201).json({ message: 'User registered successfully!' });
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username);
  if (!user) return res.status(400).json({ message: 'User not found!' });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(400).json({ message: 'Invalid password!' });

  res.status(200).json({ message: 'Login successful!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
