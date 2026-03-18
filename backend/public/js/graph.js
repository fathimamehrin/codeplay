/* ================= PROGRESS (DYNAMIC FOR HTML + CSS) ================= */

// Detect page type
let path = window.location.pathname.toLowerCase();

let progressKey = "";
let introKey = "";
let structureKey = "";

if (path.includes("html")) {
  progressKey = "lessonProgress";
  introKey = "htmlIntroDone";
  structureKey = "htmlStructureDone";
} 
else if (path.includes("css")) {
  progressKey = "cssLessonProgress";
  introKey = "cssIntroDone";
  structureKey = "cssStructureDone";
}
  else if (path.includes("js")) {
  progressKey = "jsLessonProgress";
  introKey = "jsIntroDone";
  structureKey = "jsStructureDone";
}


// Calculate total progress
let currentStep = 0;

if (localStorage.getItem(introKey)) currentStep++;
if (localStorage.getItem(structureKey)) currentStep++;

currentStep += parseInt(localStorage.getItem(progressKey)) || 0;


/* ================= ELEMENTS ================= */

const stages = document.querySelectorAll(".stage");


/* ================= UPDATE ROADMAP ================= */

function updateRoadmap() {

  stages.forEach(stage => {

    const step = parseInt(stage.dataset.step);

    stage.classList.remove("completed", "current");

    if (step < currentStep) {
      stage.classList.add("completed");
    } 
    else if (step === currentStep) {
      stage.classList.add("current");
    }

  });

}


/* ================= COMPLETE CURRENT STAGE ================= */

function completeCurrentLevel() {

  let progress = parseInt(localStorage.getItem(progressKey)) || 0;

  progress++;

  localStorage.setItem(progressKey, progress);

  updateRoadmap();
}


/* ================= LOAD PROGRESS ================= */

document.addEventListener("DOMContentLoaded", () => {
  updateRoadmap();

  // DEBUG (optional)
  console.log("Page:", path);
  console.log("Progress Key:", progressKey);
  console.log("Current Step:", currentStep);
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

// ==========================
// ✅ APPLY CSS GLOW (FIXED FOR YOUR ROADMAP)
// ==========================

// ==========================
// ✅ FULL CSS GLOW FIX
// ==========================

window.addEventListener("DOMContentLoaded", () => {

  const stages = document.querySelectorAll(".stage");

  stages.forEach(stage => {

    const step = parseInt(stage.getAttribute("data-step"));

    // ✅ CSS INTRO
    if (step === 35 && localStorage.getItem("cssIntroDone")) {
      stage.classList.add("completed");
    }

    // ✅ CSS STRUCTURE
    if (step === 36 && localStorage.getItem("cssStructureDone")) {
      stage.classList.add("completed");
    }

    // ✅ CSS LESSONS (37 → 54)
    if (step >= 37 && step <= 54) {

      const lessonIndex = step - 37; // convert step → lesson index
      const key = "css_" + lessonIndex;

      if (localStorage.getItem(key)) {
        stage.classList.add("completed");
      }
    }

    // =====================
    // ✅ JS
    // =====================

    // JS INTRO
    if (step === 55 && localStorage.getItem("jsIntroDone")) {
      stage.classList.add("completed");
    }

    // JS STRUCTURE
    if (step === 56 && localStorage.getItem("jsStructureDone")) {
      stage.classList.add("completed");
    }

    // JS LESSONS (57 → 87)
    if (step >= 57 && step <= 87) {
      const lessonIndex = step - 57;
      if (localStorage.getItem("js_" + lessonIndex)) {
        stage.classList.add("completed");
      }
    }

  });

});