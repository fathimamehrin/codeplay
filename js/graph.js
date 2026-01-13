/*
  PROGRESS COMES FROM LESSON COMPLETION
  Example:
  localStorage.setItem("lessonStep", 2);
*/

const stages = document.querySelectorAll(".stage");
const character = document.getElementById("character");

// CURRENT PROGRESS
let currentStep = Number(localStorage.getItem("lessonStep")) || 0;

function updateRoadmap() {
  stages.forEach((stage, index) => {
    stage.classList.remove("completed", "current");

    if (index < currentStep) {
      stage.classList.add("completed");
    } else if (index === currentStep) {
      stage.classList.add("current");
    }
  });

  moveCharacter();
}

function moveCharacter() {
  const activeStage = document.querySelector(".stage.current");
  if (!activeStage) return;

  const rect = activeStage.getBoundingClientRect();
  character.style.top = rect.top + window.scrollY - 45 + "px";
}

// Run on load
updateRoadmap();

/* 
  CALL THIS FROM LESSON PAGES
  when user completes a lesson:
  
  localStorage.setItem("lessonStep", nextStep);
*/
