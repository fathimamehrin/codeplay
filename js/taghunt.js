window.onload = function () {
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");

  const profileNameEl = document.querySelector(".profile-name");
  const profileIconEl = document.getElementById("home-profile-pic");

  // If there's a saved username, show it; otherwise show "Profile"
  if (username && username.trim() !== "") {
    profileNameEl.textContent = username;
  } else {
    profileNameEl.textContent = "Profile";
  }

  // If there's a saved profile pic, use it; otherwise use a default purple dot
  if (profilePic && profilePic.trim() !== "") {
    profileIconEl.src = profilePic;
  } else {
    // default icon (replace with your real default icon if you have one)
    profileIconEl.src = "/images/Ellipse 1.png";
    // if you want the default to be a small circle, you could set a CSS class instead
  }

  // Ensure the profile area uses the default visual state (not hidden, etc.)
  profileNameEl.style.opacity = "1";
  profileIconEl.style.opacity = "1";

  updateUI();
};
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

  // Confirmation box before removing the account
  const confirmed = confirm("Are you sure you want to remove your account?");

  if (!confirmed) {
    return; // If user clicks Cancel, stop here
  }

  // ==================== CLEAR STORAGE ==================== //
  localStorage.clear();

  // ==================== RESET ALL VALUES ==================== //
  points = 0;
  htmlProgress = 0;
  cssProgress = 0;
  jsProgress = 0;

  // ==================== RESET PROFILE AREA ==================== //
  document.querySelector(".profile-name").textContent = "Profile";
document.getElementById("home-profile-pic").src = "default.png";


  // ==================== LOCK CSS & JS AGAIN ==================== //
  document.getElementById("css-btn").classList.add("locked");
  document.getElementById("css-btn").style.pointerEvents = "none";
  document.getElementById("js-btn").classList.add("locked");
  document.getElementById("js-btn").style.pointerEvents = "none";

  // Refresh UI
  updateUI();

  alert("Account Removed Successfully!");

  // ==================== REDIRECT TO FIRST PAGE ==================== //
  window.location.href = "/html/index.html";
  window.onload = function () {
    

    // Update username if element exists
    const nameElement = document.getElementById("home-username");
    if (savedName && nameElement) {
        nameElement.innerText = savedName;
    }

    // Update profile picture if element exists
    const picElement = document.getElementById("home-profile-pic");
    if (savedPic && picElement) {
        picElement.src = savedPic;
    }
};
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

  /* ---------------- HTML / CSS / JS TOGGLES ---------------- */

  document.querySelectorAll(".tech-arrow").forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.stopPropagation();
      const submenu = arrow.parentElement.nextElementSibling;

      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    });
  });



let score = 0;
let draggedTag = null;

const dragItems = document.querySelectorAll(".drag-item");
const dropBoxes = document.querySelectorAll(".drop-box");
const scoreDisplay = document.getElementById("score");

dragItems.forEach(item => {
  item.addEventListener("dragstart", () => {
    draggedTag = item.getAttribute("data-tag");
  });
});

dropBoxes.forEach(box => {
  box.addEventListener("dragover", e => {
    e.preventDefault();
  });

  box.addEventListener("drop", () => {
    const correctTag = box.getAttribute("data-answer");
    const symbol = box.querySelector("span");

    if (draggedTag === correctTag) {
      symbol.textContent = " ✅";
      symbol.className = "correct";
      score += 10;
    } else {
      symbol.textContent = " ❌";
      symbol.className = "wrong";
    }

    scoreDisplay.textContent = score;
  });
});
