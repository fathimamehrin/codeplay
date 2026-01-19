/* ================= PROGRESS ================= */

let currentStep = 0; // lesson progress

const stages = document.querySelectorAll(".stage");
const path = document.getElementById("roadPath");

/* ================= UPDATE ROADMAP ================= */

function updateRoadmap() {
  stages.forEach((stage, index) => {
    stage.classList.remove("completed", "current");

    if (index < currentStep) {
      stage.classList.add("completed");
    } 
    else if (index === currentStep) {
      stage.classList.add("current");
    }
  });
  setTimeout(completeCurrentLevel, 2500);


  updatePathGlow();

}

/* ================= PATH GLOW ================= */

function updatePathGlow() {
  const totalSteps = stages.length - 1;
  const progress = Math.min(currentStep / totalSteps, 1);

  /* pathLength="1"
     1 → hidden
     0 → fully visible */
  path.style.strokeDashoffset = 1 - progress;
}

/* ================= COMPLETE CURRENT STAGE ================= */
/* Call this when user clicks "Next Lesson" */

function completeCurrentLevel() {
  if (currentStep < stages.length - 1) {
    currentStep++;
    updateRoadmap();
  }
}

/* ================= INITIAL LOAD ================= */

updateRoadmap();

/* ================= DEMO (REMOVE LATER) ================= */
/* Auto progress every 2.5s just for testing */



/* ================= SIDEBAR & ACCOUNT ================= */

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const removeAcc = document.getElementById("removeAccount");

removeAcc.addEventListener("click", (e) => {
  e.preventDefault();

  const confirmed = confirm("Are you sure you want to remove your account?");
  if (!confirmed) return;

  /* CLEAR STORAGE */
  localStorage.clear();

  alert("Account Removed Successfully!");
  window.location.href = "/html/index.html";
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


