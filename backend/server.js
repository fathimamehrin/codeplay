
const express = require("express");
const mongoose = require("mongoose");
const path = require("path"); 
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect(
  "mongodb+srv://fathimamehrin:fath1604@cluster-1.jstp8gw.mongodb.net/"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// User model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  level:{
    type: String,
    enum: ["beginner" , "intermediate"]
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
  }
});


const User = mongoose.model("User", userSchema);

// Routes
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.send("All fields required");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ 
    username,
     email, 
     password : hashedPassword,
    });

  await newUser.save();
  console.log("REGISTERED USER:", newUser);
  
  res.send("User registered successfully");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  
  const user = await User.findOne({ email });

  if (!user){ return res.json({ success: false, message: "Invalid email or password" });
}

  const isMatch = await bcrypt.compare(password, user.password);


  if (!isMatch) {
    return res.json({ success: false, message: "Invalid email or password" });
  }

  res.json({ success: true, 
    message: "Login successful",
    username: user.username,
    email: user.email

   }); 
});

// Level selection route
app.post("/set-level", async (req, res) => {
  const { email, level } = req.body;

  if (!["beginner", "intermediate"].includes(level)) {
    return res.status(400).json({ message: "Invalid level" });
  }

  try {
    const user = await User.findOneAndUpdate(
      { email },
      { level },
      { new: true }
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: `You selected ${level} level`, level: user.level });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/update-progress", async (req, res) => {
  const { email, subject, value } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (["html", "css", "js"].includes(subject)) {
    user.progress[subject] += value;
    user.points += value;
    }
    // Unlock logic
    if (user.points >= 30) user.unlocked.css = true;
    if (user.points >= 50) user.unlocked.js = true;

    await user.save();

    res.json({
      progress: user.progress,
      points: user.points,
      unlocked: user.unlocked
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
  
});

app.get("/get-progress", async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      level: user.level,
      progress: user.progress,
      points: user.points,
      unlocked: user.unlocked
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});



// Serve HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
