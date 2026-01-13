const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔗 MongoDB Atlas connection
mongoose.connect(
  "mongodb+srv://fathimamehrin:fath1604@cluster-1.jstp8gw.mongodb.net/"
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.send("All fields required");
  }

  const newUser = new User({
    username,
    email,
    password
  });

  await newUser.save();

  res.send("User registered successfully");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });

  if (!user) {
    return res.send("Invalid login");
  }

  res.send(`Welcome ${user.username}`);
});


app.get("/", (req, res) => {
  res.send("Backend + DB connected");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
