// ==========================
// GLOBAL POINTS
// ==========================
let cssPoints = 0;

const params = new URLSearchParams(window.location.search);
const fromLesson = Number(params.get("cssLesson")) || 0;


// ==========================
// RESTORE FROM BACKEND
// ==========================
async function restoreProgressFromBackend() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const response = await fetch(`/get-progress?email=${email}&subject=css`);
    const data = await response.json();

    cssPoints = Number(data.points) || 0;

    const pointEl = document.getElementById("point");
    if (pointEl) {
      pointEl.innerText = cssPoints;
    }

  } catch (err) {
    console.error("❌ Failed to restore progress", err);
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
        subject: "css",
        value: value,
        game: "cssGame2"
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

window.onload = async function () {
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");

  const profileNameEl = document.querySelector(".profile-name");
  const profileIconEl = document.getElementById("home-profile-pic");

  profileNameEl.textContent = username?.trim() || "Profile";
  profileIconEl.src = profilePic?.trim() || "/images/Ellipse 1.png";

  profileIconEl.style.width = "35px";
  profileIconEl.style.height = "35px";
  profileIconEl.style.borderRadius = "50%";

  await restoreProgressFromBackend();
};


// SIDEBAR SAFETY
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

let level = 0

const levels = [

{
question:"Which CSS property added the border?",
apply:box=>{
box.style.border="3px solid black"
},
answer:"border",
options:["margin","border","padding","width"]
},

{
question:"Which CSS property rounded the corners?",
apply:box=>{
box.style.borderRadius="15px"
},
answer:"border-radius",
options:["border","border-radius","margin","height"]
},

{
question:"Which property increased the width?",
apply:box=>{
box.style.width="150px"

},
answer:"width",
options:["height","width","margin","padding"]
},

{
question:"Which property increased the height?",
apply:box=>{
box.style.height="100px"
},
answer:"height",
options:["width","height","margin","border"]
},

{
question:"Which property added space inside the box?",
apply:box=>{
box.style.padding="15px"
},
answer:"padding",
options:["padding","margin","width","height"]
},

{
question:"Which property added space outside the box?",
apply:box=>{
box.style.margin="40px auto"
},
answer:"margin",
options:["padding","margin","width","border"]
},

{
question:"Which property hides the element?",
apply:box=>{
box.style.display="none"
},
answer:"display:none",
options:["display:block","display:none","margin","padding"]
},

{
question:"Which property shows element as block?",
apply:box=>{
box.style.display="block"
},
answer:"display:block",
options:["display:block","display:inline","margin","width"]
},

{
question:"Which property shows elements inline?",
apply:box=>{
box.style.display="inline"
},
answer:"display:inline",
options:["display:inline","display:block","padding","height"]
},

{
question:"Which TWO properties created this design?",
apply:box=>{
box.style.border="3px solid black"
box.style.borderRadius="20px"
},
answer:"border + border-radius",
options:[
"border + padding",
"border + border-radius",
"margin + padding",
"width + height"
]
},

{
question:"Which TWO properties created this spacing?",
apply:box=>{
box.style.padding="20px"
box.style.margin="40px"
},
answer:"padding + margin",
options:[
"padding + margin",
"width + height",
"border + padding",
"margin + height"
]
},

{
question:"Which TWO properties changed the size?",
apply:box=>{
box.style.width="200px"
box.style.height="100px"
},
answer:"width + height",
options:[
"width + height",
"margin + padding",
"border + height",
"display + width"
]
},

{
question:"Which TWO properties styled this box?",
apply:box=>{
box.style.border="3px solid red"
box.style.padding="20px"
},
answer:"border + padding",
options:[
"border + padding",
"margin + padding",
"width + height",
"display + padding"
]
},

{
question:"Which TWO properties changed the layout?",
apply:box=>{
box.style.margin="30px"
box.style.borderRadius="25px"
},
answer:"margin + border-radius",
options:[
"margin + border-radius",
"width + padding",
"display + height",
"border + margin"
]
},

{
question:"Which property made the box circular?",
apply:box=>{
box.style.borderRadius="50%"
},
answer:"border-radius",
options:["border-radius","width","height","padding"]
}

]

function shuffleLevels(array){

for(let i=array.length-1;i>0;i--){

const j = Math.floor(Math.random() * (i + 1));

[array[i], array[j]] = [array[j], array[i]];

}

}

function loadLevel(){

if(level>=levels.length){

document.getElementById("game-over").style.display="block"

// Give reward ONLY once when game finishes
cssPoints += 5

document.getElementById("point").innerText = cssPoints

updateProgressToBackend(5)

return

}

const data=levels[level]

document.getElementById("case").innerText="🕵️ Case "+(level+1)

document.getElementById("question").innerText=data.question

const box=document.getElementById("preview-box")

box.style=""
box.innerText="CodePlay"

box.style.width="160px"
box.style.height="80px"
box.style.margin="20px auto"
box.style.display="flex"
box.style.alignItems="center"
box.style.justifyContent="center"

data.apply(box)

const optionsDiv=document.getElementById("options")

optionsDiv.innerHTML=""

data.options.forEach(opt=>{

const btn=document.createElement("button")

btn.innerText=opt

btn.onclick=()=>checkAnswer(opt,data.answer)

optionsDiv.appendChild(btn)

})

document.getElementById("result").innerText=""

}

function checkAnswer(selected, correct){

if(selected === correct){

document.getElementById("result").innerText = "✅ Correct!"

level++

setTimeout(loadLevel, 900)

}else{

document.getElementById("result").innerText = "❌ Wrong! Look carefully."

}

}

function restartGame(){

level=0

shuffleLevels(levels)

document.getElementById("game-over").style.display="none"

loadLevel()

}

shuffleLevels(levels)

loadLevel()

function prevCssLesson() {
  if(fromLesson > 1){
  window.location.href = `cssLesson.html?cssLesson=${fromLesson - 1}`;
  }
}

function nextCssLesson() {
  window.location.href = `cssLesson.html?cssLesson=${fromLesson + 1}`;
}