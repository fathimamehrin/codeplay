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
box.style.width="280px"
},
answer:"width",
options:["height","width","margin","padding"]
},

{
question:"Which property increased the height?",
apply:box=>{
box.style.height="150px"
},
answer:"height",
options:["width","height","margin","border"]
},

{
question:"Which property added space inside the box?",
apply:box=>{
box.style.padding="25px"
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
box.style.width="260px"
box.style.height="140px"
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

function checkAnswer(selected,correct){

if(selected===correct){

document.getElementById("result").innerText="✅ Correct!"

level++

setTimeout(loadLevel,900)

}else{

document.getElementById("result").innerText="❌ Wrong! Look carefully."

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