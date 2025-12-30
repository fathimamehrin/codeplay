const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Temporary users array (for learning)
let users = [];

// 🟢 REGISTER (Signup)
app.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.send("All fields are required");
  }

  // Check if user already exists
  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.send("User already exists");
  }

  // Save user
  users.push({ username, email, password });

  console.log(users);
  res.send("Account created successfully");
});

// 🔵 LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.send("Invalid email or password");
  }

  res.send(`Welcome ${user.username}`);
});

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
