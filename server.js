const express=require("express");
const path=require("path");

const app=express();
const PORT=3000;

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.post("/login",(req,res)=>{
    const {username,password,email}=req.body;

  console.log("Form data received:");
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);
   
  res.send(`<h1>Account Created</h1><p>Welcome ,${username}!<p>`);
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
