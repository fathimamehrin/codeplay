


const params = new URLSearchParams(window.location.search);
const fromLesson = Number(params.get("jsLesson")) || 0;




// ==========================
// NAVBAR USER INFO
// ==========================
window.onload = async () => {

const username = localStorage.getItem("username");
const profilePic = localStorage.getItem("profilePic");

document.getElementById("home-username").textContent =
username || "Username";

const profileEl = document.getElementById("home-profile-pic");

if(profileEl){
profileEl.src = profilePic || "/images/default.png";
profileEl.style.width = "35px";
profileEl.style.height = "35px";
profileEl.style.borderRadius = "50%";
}


await restoreJsProgressFromBackend();

};

// ==========================
// SIDEBAR MENU
// ==========================
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if (menuBtn && sidebar && overlay) {

menuBtn.addEventListener("click", () => {
sidebar.classList.add("open");
overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
sidebar.classList.remove("open");
overlay.classList.remove("show");
});

}

// ==========================
// STUDYDECK TOGGLE
// ==========================
const studydeckArrow = document.querySelector(".studydeck-arrow");

if (studydeckArrow) {

studydeckArrow.addEventListener("click", (e) => {

e.stopPropagation();

const submenu = studydeckArrow.parentElement.nextElementSibling;

submenu.style.display =
submenu.style.display === "block" ? "none" : "block";

});

}

// ==========================
// TECH MENU TOGGLES
// ==========================
document.querySelectorAll(".tech-arrow").forEach((arrow) => {

arrow.addEventListener("click", (e) => {

e.stopPropagation();

const submenu = arrow.parentElement.nextElementSibling;

submenu.style.display =
submenu.style.display === "block" ? "none" : "block";

});

});

// ==========================
// LOG OUT
// ==========================
document.getElementById("removeAccount").addEventListener("click", e => {

e.preventDefault();

if (!confirm("Are you sure you want to log out?")) return;

localStorage.clear();
window.location.href = "about.html";

});

// ==========================
// POINTS VARIABLES
// ==========================
let jsPoints = 0;

// ==========================
// UPDATE POINT DISPLAY
// ==========================
function updatePointsDisplay() {

const pointsEl = document.getElementById("points-count");

if(pointsEl){
pointsEl.innerText = jsPoints.toString().padStart(2,"0");
}

}

// ==========================
// RESTORE POINTS FROM SERVER
// ==========================
async function restoreJsProgressFromBackend(){

const email = localStorage.getItem("userEmail");

if(!email) return;

try{

const res = await fetch(`/get-progress?email=${email}&subject=js`);
const data = await res.json();

jsPoints = data.points || 0;

updatePointsDisplay();

}catch(err){

console.error("❌ Restore failed",err);

}

}

// ==========================
// UPDATE BACKEND
// ==========================
async function updateProgressToBackend(value) {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const response = await fetch("/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        subject: "js",
        value: value,
        game: "jsGame1"
      })
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    await restoreProgressFromBackend();

  } catch (err) {
    console.error("❌ Failed to update progress", err);
  }
}
// ==========================
// UPDATE POINTS TO SERVER
// ==========================
async function updateJsProgressToBackend(value){

const email = localStorage.getItem("userEmail");

if(!email) return;

try{

await fetch("/update-progress",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({

email,
subject:"js",
value:value

})

});

}catch(err){

console.error("❌ Save failed",err);

}

}




let level = 0;

const levels = [

{
code:`let x = 4;
let y = 6;
let z = x + y;
document.write(z);`,
options:["46","10","24","Error"],
answer:"10"
},

{
code:`let x = 5;
x = x + 3;
document.write(x);`,
options:["5","8","53","Error"],
answer:"8"
},

{
code:`let name = "Sara";
document.write(typeof name);`,
options:["number","string","boolean","object"],
answer:"string"
},

{
code:`let isStudent = true;
document.write(typeof isStudent);`,
options:["boolean","number","string","undefined"],
answer:"boolean"
},

{
code:`let a = 12;
let b = 3;
let result = a / b;
document.write(result);`,
options:["36","4","9","15"],
answer:"4"
},

{
code:`let x = 10;
let y = 5;
let result = x + y * 2;
document.write(result);`,
options:["30","20","25","15"],
answer:"20"
},

{
code:`let x = 7;
let y = 9;
document.write(x > y);`,
options:["true","false","79","error"],
answer:"false"
},

{
code:`let x = 10;
let y = "10";
document.write(x == y);`,
options:["true","false","undefined","error"],
answer:"true"
},

{
code:`let x = 10;
let y = "10";
document.write(x === y);`,
options:["true","false","10","error"],
answer:"false"
},

{
code:`let x = 8;
let y = 4;
let result = (x + y) > (x * 1);
document.write(result);`,
options:["true","false","12","error"],
answer:"true"
}

];

function loadLevel(){

let current = levels[level];

document.getElementById("level").innerText =
"Level " + (level+1) + " / " + levels.length;

document.getElementById("code").innerText =
current.code;

document.getElementById("result").innerText = "";

let optionsHTML = "";

current.options.forEach(opt=>{
optionsHTML +=
`<button class="option-btn" onclick="checkAnswer('${opt}')">${opt}</button>`;
});

document.getElementById("options").innerHTML = optionsHTML;

}

function checkAnswer(choice){

let correct = levels[level].answer;

if(choice === correct){
document.getElementById("result").innerText = "✅ Correct!";
}else{
document.getElementById("result").innerText =
"❌ Wrong! Correct answer: " + correct;
}

if(level === levels.length - 1){

setTimeout(()=>{

document.getElementById("result").innerText =
"🎉 All Levels Completed!";

localStorage.setItem("jsGameResult","complete");

},1000);

return;

}

level++;

setTimeout(loadLevel,1000);

}


loadLevel();

function prevJsLesson() {
  window.location.href = `jsLesson.html?jsLesson=${fromLesson-1}`;
}

function nextJsLesson() {
  window.location.href = `jsLesson.html?jsLesson=${fromLesson + 1}`;
}