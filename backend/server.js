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
},

  profilePic: { type: String, default: "default.png" } ,
  lastVisited: { type: String, default: "home.html" } 
});

const User = mongoose.model("User", userSchema);

// ================= Lesson Schema =================
const lessonSchema = new mongoose.Schema({
  course: { type: String, enum: ["HTML","CSS","JS"], required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  points: { type: Number, default: 0 }
});
const Lesson = mongoose.model("Lesson", lessonSchema);

// ================= Game Schema =================
const gameSchema = new mongoose.Schema({
  course: { type: String, enum: ["HTML","CSS","JS"], required: true },
  title: { type: String, required: true },
  type: { type: String, enum: ["quiz","puzzle"], required: true },
  points: { type: Number, default: 0 }
});
const Game = mongoose.model("Game", gameSchema);
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
      { returnDocument: "after" }
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
    const { email, username, profilePic, subject, value , game, completedLessons,lastVisited } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (username) user.username = username;

    // Update profile picture
    if (profilePic) user.profilePic = profilePic;

    if (subject && ["html", "css", "js"].includes(subject)) {
      user.progress[subject] += Number(value);
      user.points += Number(value);
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

     if (completedLessons && subject) {
      if (!user.completedLessons) user.completedLessons = {};
      if (!user.completedLessons[subject]) user.completedLessons[subject] = {};

      // Merge new lessons into existing ones
      Object.assign(user.completedLessons[subject], completedLessons);
    }

    

    // 🔓 Unlock Logic
    if (user.points >= 30) user.unlocked.css = true;
    if (user.points >= 50) user.unlocked.js = true;

    // ---------- STREAK LOGIC ----------
    const today = new Date().toDateString();
    const lastDate = user.streak?.lastDate ? user.streak.lastDate.toDateString() : null;

    if (!user.streak) user.streak = { count: 0, lastDate: null };

    if (lastDate === today) {
      // Already updated today → do nothing
    } else if (lastDate === new Date(Date.now() - 86400000).toDateString()) {
      // Last activity was yesterday → increment streak
      user.streak.count += 1;
      user.streak.lastDate = new Date();
    } else {
      // Missed a day → reset streak
      user.streak.count = 1;
      user.streak.lastDate = new Date();

      
    }

     if (lastVisited) user.lastVisited = lastVisited;


    await user.save();

    res.json({
      message: "Progress updated",
      username: user.username,
      profilePic: user.profilePic,
      progress: user.progress,
      points: user.points,
      unlocked: user.unlocked,
      completedGames: user.completedGames,
      completedLessons: user.completedLessons,
      streak: user.streak.count,
      lastVisited: user.lastVisited
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
        unlocked: user.unlocked,
        username: user.username,       // ✅ add username
        profilePic: user.profilePic ,
        completedGames: user.completedGames,
      completedLessons: user.completedLessons,
      streak: user.streak?.count || 0,
      lastVisited: user.lastVisited
      });

    }

    // Otherwise return total points (homepage)
    res.json({
      points: user.points,
      progress: user.progress,
      unlocked: user.unlocked,
      username: user.username,       // ✅ add username
      profilePic: user.profilePic,
      completedGames: user.completedGames,
      completedLessons: user.completedLessons,
      streak: user.streak?.count || 0,
      lastVisited: user.lastVisited
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/admin-login", (req,res)=>{

    const {email,password} = req.body;

    if(email === "admin@gmail.com" && password === "12345"){
        res.json({message:"Login successful"});
    }
    else{
        res.status(401).json({message:"Invalid admin credentials"});
    }

});

// ================= Total Users =================
app.get("/total-users", async (req,res)=>{

  try{

    const count = await User.countDocuments();

    res.json({total:count});

  }catch(err){
    console.error(err);
    res.status(500).json({message:"Server error"});
  }

});

// ================= Get All Users =================
app.get("/users", async (req,res)=>{

  try{

    const users = await User.find();

    res.json(users);

  }catch(err){
    console.error(err);
    res.status(500).json({message:"Server error"});
  }

});

// ================= Delete User =================
app.delete("/delete-user/:id", async (req,res)=>{

  try{

    await User.findByIdAndDelete(req.params.id);

    res.json({message:"User deleted"});

  }catch(err){
    console.error(err);
    res.status(500).json({message:"Server error"});
  }

});
app.post("/admin/add-lesson", async (req,res)=>{
  try{
    const {course,title,content,points} = req.body;
    const lesson = new Lesson({course,title,content,points});
    await lesson.save();
    res.json({success:true,message:"Lesson added"});
  }catch(err){
    res.status(500).json({success:false,message:"Server error"});
  }
});

app.post("/admin/add-game", async (req,res)=>{
  try{
    const {course,title,type,points} = req.body;
    const game = new Game({course,title,type,points});
    await game.save();
    res.json({success:true,message:"Game added"});
  }catch(err){
    res.status(500).json({success:false,message:"Server error"});
  }
});

// ================= Leaderboard =================
app.get("/leaderboard", async (req,res)=>{

  try{

    const users = await User.find()
      .sort({points:-1})
      .limit(5);

    res.json(users);

  }catch(err){
    console.error(err);
    res.status(500).json({message:"Server error"});
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


