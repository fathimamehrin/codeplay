window.onload = async function () {

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("userEmail");
  const profilePic = localStorage.getItem("profilePic");

  const profileNameEl = document.querySelector(".profile-name");
  const profileIconEl = document.getElementById("home-profile-pic");

  if (username && username.trim() !== "") {
    profileNameEl.textContent = username;
  } else {
    profileNameEl.textContent = "Profile";
  }

  if (profilePic && profilePic.trim() !== "") {
    profileIconEl.src = profilePic;
  } else {
    profileIconEl.src = "/images/Ellipse 1.png";
  }

  profileNameEl.style.opacity = "1";
  profileIconEl.style.opacity = "1";

  // ================= FETCH POINTS FROM BACKEND =================
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}`);
    const data = await res.json();

    points = data.points || 0;

    updateUI();
  } catch (err) {
    console.error("Failed to load points", err);
  }
};


// ==================== VARIABLES ==================== //
let points = 0;


// Format points (00 style)
function formatPoints(value) {
  return value.toString().padStart(2, "0");
}

function updateUI() {
  const pointsEl = document.getElementById("points-count");

  if (pointsEl) {
    pointsEl.textContent = formatPoints(points);
  }
}


// ==================== PROGRESS BUTTON LOGIC ==================== //


// ==================== SIDEBAR MENU FUNCTIONALITY ==================== //
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const removeAcc = document.getElementById("removeAccount");

// Open sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
  overlay.classList.add("show");
});


overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});
removeAcc.addEventListener("click", (e) => {
  e.preventDefault();

  const confirmed = confirm("Are you sure you want to remove your account?");
  if (!confirmed) return;

  localStorage.clear();

  points = 0;
  updateUI();

  document.querySelector(".profile-name").textContent = "Profile";
  document.getElementById("home-profile-pic").src = "default.png";

  document.getElementById("css-btn").classList.add("locked");
  document.getElementById("css-btn").style.pointerEvents = "none";
  document.getElementById("js-btn").classList.add("locked");
  document.getElementById("js-btn").style.pointerEvents = "none";

  alert("Account Removed Successfully!");

  window.location.href = "/html/about.html";
});

  
 
const studydeckArrow = document.querySelector(".studydeck-arrow");

if (studydeckArrow) {
  studydeckArrow.addEventListener("click", (e) => {
    e.stopPropagation();
    const submenu = studydeckArrow.parentElement.nextElementSibling;

    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";
  });
}

document.querySelectorAll(".tech-arrow").forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    e.stopPropagation();
    const submenu = arrow.parentElement.nextElementSibling;

    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";
  });
});

  /* ---------------- HTML / CSS / JS TOGGLES ---------------- */

  document.querySelectorAll(".tech-arrow").forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.stopPropagation();
      const submenu = arrow.parentElement.nextElementSibling;

      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    });
  });

