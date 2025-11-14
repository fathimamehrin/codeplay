const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for JSON POST requests
app.use(express.static(path.join(__dirname, "public")));

// 🧠 Temporary in-memory user progress
// Later, you can connect this with your login system
let userProgress = {
  user1: "lesson1.html", // default page for demo
};

// 🟢 Route for login/signup form
app.post("/login", (req, res) => {
  const { username, password, email } = req.body;

  console.log("Form data received:");
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);

 
  userProgress[username] = "lesson1.html";

  res.send(`<h1>Account Created</h1><p>Welcome, ${username}!</p>`);
});


app.post("/save-progress", (req, res) => {
  const { user, page } = req.body;

  if (!user || !page) {
    return res.status(400).json({ error: "Missing user or page" });
  }

  userProgress[user] = page;
  console.log(`✅ Progress saved: ${user} -> ${page}`);
  res.json({ message: "Progress saved successfully", user, page });
});

app.get("/get-started", (req, res) => {

  const user = "user1";

  const lastPage = userProgress[user] || "lesson1.html";
  res.redirect(`http://127.0.0.1:5500/${lastPage}`);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});