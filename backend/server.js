const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


// ================= MongoDB Connection =================
mongoose.connect(
"mongodb+srv://fathimamehrin:fath1604@cluster-1.jstp8gw.mongodb.net/codeplay"
)
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log("❌ MongoDB Error:", err));

// ================= User Schema =================
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },

  email: { 
    type: String, 
    required: true, 
    unique: true 
  },

  password: { type: String, required: true },

  level: {
    type: String,
    enum: ["beginner", "intermediate"],
    default: "beginner"
  },

  progress: {
    html: { type: Number, default: 0 },
    css: { type: Number, default: 0 },
    js: { type: Number, default: 0 }
  },

  points: {
    type: Number,
    default: 0
  },

  unlocked: {
    css: { type: Boolean, default: false },
    js: { type: Boolean, default: false }
  },

  completedGames: {
  htmlGame1: { type: Boolean, default: false },
  htmlGame2: { type: Boolean, default: false },
  htmlGame3: { type: Boolean, default: false }
}
});

const User = mongoose.model("User", userSchema);


// ================= Register =================
app.post("/register", async (req, res) => {

   console.log("Register request:", req.body);
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // ✅ Check duplicate email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();
    
    
    res.json({ success: true, message: "User registered successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// ================= Login =================
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid email or password" });
    }

    res.json({
      success: true,
      message: "Login successful",
      username: user.username,
      email: user.email
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// ================= Set Level =================
app.post("/set-level", async (req, res) => {
  try {
    const { email, level } = req.body;

    if (!["beginner", "intermediate"].includes(level)) {
      return res.status(400).json({ message: "Invalid level" });
    }

    const user = await User.findOneAndUpdate(
      { email },
      { level },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: `You selected ${level} level`,
      level: user.level
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// ================= Update Progress =================
app.post("/update-progress", async (req, res) => {
  try {
    const { email, subject, value , game } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (game) {

      if (user.completedGames[game]) {
        return res.json({
          message: "Game already completed",
          points: user.points
        });
      }

      // Mark as completed
      user.completedGames[game] = true;
    }

    if (["html", "css", "js"].includes(subject)) {
      user.progress[subject] += Number(value);
      user.points += Number(value);
    }

    // 🔓 Unlock Logic
    if (user.points >= 30) user.unlocked.css = true;
    if (user.points >= 50) user.unlocked.js = true;

    await user.save();

    res.json({
      message: "Progress updated",
      progress: user.progress,
      points: user.points,
      unlocked: user.unlocked,
      completedGames: user.completedGames
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// ================= Get Progress =================
app.get("/get-progress", async (req, res) => {
  try {

    const { email, subject } = req.query;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // If subject is requested → return subject points
    if (subject && ["html","css","js"].includes(subject)) {

      return res.json({
        points: user.progress[subject],
        progress: user.progress,
        unlocked: user.unlocked
      });

    }

    // Otherwise return total points (homepage)
    res.json({
      points: user.points,
      progress: user.progress,
      unlocked: user.unlocked
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// ================= Home =================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
});


// ================= Start Server =================
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});


