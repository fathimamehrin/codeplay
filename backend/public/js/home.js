// ====================== GLOBAL STATE ====================== //
let points = 0;
let htmlProgress = 0;
let cssProgress = 0;
let jsProgress = 0;
let userLevel = "--";

// ====================== ON PAGE LOAD ====================== //
window.onload = async () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("userEmail");
  const profilePic = localStorage.getItem("profilePic");

  // ---------- PROFILE ----------
  document.getElementById("home-username").textContent =
    username || "Username";

  document.getElementById("home-profile-pic").src =
    profilePic || "/images/default.png";

 // ---------- STUDYDECK SUBMENU TOGGLE ----------
    const studydeckArrow = document.querySelector(".studydeck-arrow");
  if (studydeckArrow) {
    studydeckArrow.addEventListener("click", (e) => {
      e.stopPropagation();
      const submenu = studydeckArrow.parentElement.nextElementSibling;

      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    });
  }

   /* ---------------- HTML / CSS / JS TOGGLES ---------------- */

  document.querySelectorAll(".tech-arrow").forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.stopPropagation();
      const submenu = arrow.parentElement.nextElementSibling;

      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    });
  });

  // ---------- PROJECTS SUBMENU TOGGLE ----------
const projectArrow = document.querySelector(".project-arrow");
if (projectArrow) {
  projectArrow.addEventListener("click", (e) => {
    e.stopPropagation();
    const submenu = projectArrow.parentElement.nextElementSibling;

    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";
  });
}

  // ---------- FETCH USER DATA ----------
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}`);
    const data = await res.json();
    
    console.log("Fetched user data:", data);
    applyBackendData(data);
  } catch (err) {
    console.error("Failed to load user data", err);
  }
};

// ====================== APPLY BACKEND DATA ====================== //
async function applyBackendData(data) {
  points = data.points;
  htmlProgress = data.progress?.html;
  cssProgress = data.progress?.css;
  jsProgress = data.progress?.js;
  userLevel = data.level || "--";

  if (data.unlocked?.css) unlockCSS();
  if (data.unlocked?.js) unlockJS();

  updateUI();
}

// ====================== UPDATE UI ====================== //
function updateUI() {
  document.getElementById("points-count").textContent =
    points.toString().padStart(2, "0");

  document.getElementById("html-progress").textContent = `${htmlProgress}/30`;
  document.getElementById("css-progress").textContent = `${cssProgress}/50`;
  document.getElementById("js-progress").textContent = `${jsProgress}/60`;
}

// ====================== UNLOCK MODULES ====================== //
function unlockCSS() {
  const btn = document.getElementById("css-btn");
  btn.classList.remove("locked");
  btn.style.pointerEvents = "auto";

  const lockImg = document.getElementById("css-lock");
  lockImg.src = "/images/unlock.png"; 
}

function unlockJS() {
  const btn = document.getElementById("js-btn");
  btn.classList.remove("locked");
  btn.style.pointerEvents = "auto";
}

// ====================== SIDEBAR TOGGLE ====================== //
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
  overlay.classList.add("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

// ====================== LOG OUT ====================== //
document.getElementById("removeAccount").addEventListener("click", e => {
  e.preventDefault();

  if (!confirm("Are you sure you want to log out?")) return;

  localStorage.clear();
  window.location.href = "about.html";
});

// ====================== MODULE ACCESS PROTECTION ====================== //
document.getElementById("css-btn").addEventListener("click", e => {
  if (e.currentTarget.classList.contains("locked")) {
    e.preventDefault();
    alert("Earn 30 points to unlock CSS");
  }
});

document.getElementById("js-btn").addEventListener("click", e => {
  if (e.currentTarget.classList.contains("locked")) {
    e.preventDefault();
    alert("Earn 50 points to unlock JavaScript");
  }
});



