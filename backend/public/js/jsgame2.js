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
let score = 0;

const levelNumber = document.getElementById("level-number");
const levelInstruction = document.getElementById("level-instruction");
const codeInput = document.getElementById("code-input");
const runCodeBtn = document.getElementById("run-code");
const feedback = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
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
    score++;
    scoreEl.textContent = score;
    currentLevel++;
    if (currentLevel < levels.length) {
      setTimeout(loadLevel, 800);
    } else {
      setTimeout(() => {
        alert(`🎉 Congratulations! You completed all levels. Final Score: ${score}/10`);
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

window.onload = loadLevel;