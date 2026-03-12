// ==================== VARIABLES ==================== //
let points = 0;


// ==================== PAGE LOAD ==================== //
window.onload = async function () {

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("userEmail");
  const profilePic = localStorage.getItem("profilePic");

  const profileNameEl = document.querySelector(".profile-name");
  const profileIconEl = document.getElementById("home-profile-pic");

  // PROFILE NAME
  if (profileNameEl) {
    profileNameEl.textContent =
      username && username.trim() !== "" ? username : "Profile";
    profileNameEl.style.opacity = "1";
  }

  // PROFILE IMAGE
  if (profileIconEl) {
    profileIconEl.src =
      profilePic && profilePic.trim() !== ""
        ? profilePic
        : "/images/Ellipse 1.png";

    profileIconEl.style.opacity = "1";
  }

  // ================= FETCH POINTS FROM BACKEND =================
  if (email) {
    try {
      const res = await fetch(`/get-progress?email=${email}`);
      const data = await res.json();

      points = Number(data.points) || 0;

      updateUI();
    } catch (err) {
      console.error("Failed to load points:", err);
    }
  }
};


// ==================== FORMAT POINTS ==================== //
function formatPoints(value) {
  return value.toString().padStart(2, "0");
}


// ==================== UPDATE UI ==================== //
function updateUI() {

  const pointsEl = document.getElementById("points-count");

  if (pointsEl) {
    pointsEl.textContent = formatPoints(points);
  }

}


// ==================== SIDEBAR ==================== //
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  });
}

if (overlay) {
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });
}


// ==================== REMOVE ACCOUNT ==================== //
const removeAcc = document.getElementById("removeAccount");

if (removeAcc) {

  removeAcc.addEventListener("click", (e) => {

    e.preventDefault();

    const confirmed = confirm("Are you sure you want to remove your account?");
    if (!confirmed) return;

    // CLEAR STORAGE
    localStorage.clear();

    // RESET POINTS
    points = 0;

    // RESET PROFILE
    const profileName = document.querySelector(".profile-name");
    const profilePic = document.getElementById("home-profile-pic");

    if (profileName) profileName.textContent = "Profile";
    if (profilePic) profilePic.src = "/images/Ellipse 1.png";

    // LOCK MODULES
    const cssBtn = document.getElementById("css-btn");
    const jsBtn = document.getElementById("js-btn");

    if (cssBtn) {
      cssBtn.classList.add("locked");
      cssBtn.style.pointerEvents = "none";
    }

    if (jsBtn) {
      jsBtn.classList.add("locked");
      jsBtn.style.pointerEvents = "none";
    }

    updateUI();

    alert("Account Removed Successfully!");

    window.location.href = "/html/index.html";

  });

}


// ==================== STUDYDECK TOGGLE ==================== //
const studydeckArrow = document.querySelector(".studydeck-arrow");

if (studydeckArrow) {

  studydeckArrow.addEventListener("click", (e) => {

    e.stopPropagation();

    const submenu = studydeckArrow.parentElement.nextElementSibling;

    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";

  });

}


// ==================== HTML / CSS / JS TOGGLES ==================== //
document.querySelectorAll(".tech-arrow").forEach((arrow) => {

  arrow.addEventListener("click", (e) => {

    e.stopPropagation();

    const submenu = arrow.parentElement.nextElementSibling;

    submenu.style.display =
      submenu.style.display === "block" ? "none" : "block";

  });

});