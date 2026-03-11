let level = 0;
let score = 0;

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

if(level >= levels.length){

document.getElementById("game-box").innerHTML =
"<h2>🎉 Game Completed!</h2><p>Your Score: "+score+"/10</p>";

return;
}

let current = levels[level];

document.getElementById("level").innerText =
"Level " + (level+1) + " / 10";

document.getElementById("code").innerText =
current.code;

document.getElementById("result").innerText = "";

document.getElementById("score").innerText =
"Score: " + score;

let optionsHTML = "";

current.options.forEach(opt=>{
optionsHTML +=
`<button onclick="checkAnswer('${opt}')">${opt}</button>`;
});

document.getElementById("options").innerHTML = optionsHTML;

}

function checkAnswer(choice){

let correct = levels[level].answer;

if(choice === correct){

score++;

document.getElementById("result").innerText = "✅ Correct!";

}else{

document.getElementById("result").innerText =
"❌ Wrong! Correct answer: " + correct;

}

level++;

setTimeout(loadLevel,1000);

}

loadLevel();