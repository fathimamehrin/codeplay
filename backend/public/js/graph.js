/* ================= PROGRESS ================= */

let currentStep = localStorage.getItem("lessonProgress")
  ? parseInt(localStorage.getItem("lessonProgress"))
  : 0;

const stages = document.querySelectorAll(".stage");
const path = document.getElementById("roadPath");

/* ================= UPDATE ROADMAP ================= */

function updateRoadmap() {
  stages.forEach((stage, index) => {
    stage.classList.remove("completed", "current");

    if (index < currentStep) {
      stage.classList.add("completed");
    } else if (index === currentStep) {
      stage.classList.add("current");
    }
  });

  // Update path glow every time roadmap changes
  updatePathGlow();
}

/* ================= COMPLETE CURRENT STAGE ================= */

function completeCurrentLevel() {
  if (currentStep < stages.length - 1) {
    currentStep++;
    localStorage.setItem("lessonProgress", currentStep);
    updateRoadmap();
  }
}

/* ================= PATH GLOW ================= */

function updatePathGlow() {
  if (!path) return;

  const pathLength = path.getTotalLength();
  const totalSteps = stages.length - 1;
  const progress = Math.min(currentStep / totalSteps, 1);

  path.style.strokeDasharray = pathLength;
  
  // Animate the stroke offset smoothly
  path.style.transition = "stroke-dashoffset 1s ease-in-out";
  path.style.strokeDashoffset = pathLength * (1 - progress);
}

/* ================= LOAD PROGRESS ================= */

document.addEventListener("DOMContentLoaded", () => {
  updateRoadmap(); // This also triggers path glow on load
});

/* ================= SIDEBAR & ACCOUNT ================= */

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const removeAcc = document.getElementById("removeAccount");

removeAcc.addEventListener("click", (e) => {
  e.preventDefault();
  const confirmed = confirm("Are you sure you want to remove your account?");
  if (!confirmed) return;

  localStorage.clear();
  alert("Account Removed Successfully!");
  window.location.href = "about.html";
});

/* ================= STUDYDECK TOGGLE ================= */

const studydeckArrow = document.querySelector(".studydeck-arrow");
if (studydeckArrow) {
  studydeckArrow.addEventListener("click", () => {
    const submenu = studydeckArrow.parentElement.nextElementSibling;
    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";
  });
}

/* ================= HTML / CSS / JS SUBMENUS ================= */

document.querySelectorAll(".tech-arrow").forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const submenu = arrow.parentElement.nextElementSibling;
    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";
  });
});