
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

loadLevel();

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
const logoutBtn = document.getElementById("removeAccount");

if(logoutBtn){
logoutBtn.addEventListener("click", e => {

e.preventDefault();

if (!confirm("Are you sure you want to log out?")) return;

localStorage.clear();
window.location.href = "about.html";

});
}

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
        game: "jsGame2"
      })
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    await restoreJsProgressFromBackend();

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

const levels = [
  {
    instruction: "If age = 16, can the person vote? (yes/no)",
    answer: "no",
    hint: "Check if age >= 18"
  },
  {
    instruction: "Is 15 < 20? (yes/no)",
    answer: "yes",
    hint: "Compare the two numbers"
  },
  {
    instruction: 'Length of string "JavaScript"?',
    answer: "10",
    hint: "Use .length property"
  },
  {
    instruction: "Loop from 1 to 3. What’s the last number printed?",
    answer: "3",
    hint: "Start at 1, stop at 3"
  },
  {
    instruction: "Start i=0; while i<2, how many times loop runs?",
    answer: "2",
    hint: "Increment i each time"
  },
  {
    instruction: 'What does function greet(){ return "Hi"; } → greet() return?',
    answer: "Hi",
    hint: "Call the function"
  },
  {
    instruction: 'let fruits = ["Apple","Banana"]; What is fruits[0]?',
    answer: "Apple",
    hint: "Arrays start at index 0"
  },
  {
    instruction: 'let person={name:"John"}; What is person.name?',
    answer: "John",
    hint: "Use dot notation"
  },
  {
    instruction: "Marks=75. Grade = ? if >=90 A, else if >=60 B else C",
    answer: "B",
    hint: "Check the correct condition"
  },
  {
    instruction: 'arr=[2,4,6]; function sum(a){return a[0]+a[2];} sum(arr)?',
    answer: "8",
    hint: "Combine array indexing and function"
  }
];

let currentLevel = 0;


const levelNumber = document.getElementById("level-number");
const levelInstruction = document.getElementById("level-instruction");
const codeInput = document.getElementById("code-input");
const runCodeBtn = document.getElementById("run-code");
const feedback = document.getElementById("feedback");

const showHintBtn = document.getElementById("show-hint");
const hintText = document.getElementById("hint-text");

function loadLevel() {
  const level = levels[currentLevel];
  levelNumber.textContent = currentLevel + 1;
  levelInstruction.textContent = level.instruction;
  codeInput.value = "";
  feedback.textContent = "";
  hintText.style.display = "none";
}

runCodeBtn.addEventListener("click", () => {
  const userAnswer = codeInput.value.trim().toLowerCase();
  const correctAnswer = levels[currentLevel].answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedback.textContent = "✅ Correct!";
    currentLevel++;
    if (currentLevel < levels.length) {
      setTimeout(loadLevel, 800);
    } else {
      setTimeout(() => {
        alert(`🎉 Congratulations! You completed all levels. `);
         localStorage.setItem("jsGameResult","complete");
      }, 500);
    }
  } else {
    feedback.textContent = "❌ Try Again!";
  }
});

showHintBtn.addEventListener("click", () => {
  hintText.textContent = levels[currentLevel].hint;
  hintText.style.display = "block";
});



function prevJsLesson() {
  window.location.href = `jsLesson.html?jsLesson=${fromLesson-1}`;
}

function nextJsLesson() {
  window.location.href = `jsLesson.html?jsLesson=${fromLesson + 1}`;
}