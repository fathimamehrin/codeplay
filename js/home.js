
// ---------------- PROFILE & USER DATA ----------------
window.onload = function () {
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");

  if (username) {
    document.querySelector(".profile-name").innerHTML = username;
  }

  if (profilePic) {
    document.querySelector(".pic-icon").src = profilePic;
  }

  updateUI(); // run UI update after loading values
};

// ---------------- POINTS & MODULE PROGRESS ----------------
let points = 0;
let htmlProgress = 0;
let cssProgress = 0;
let jsProgress = 0;

// ⭐ ADD THIS FUNCTION HERE (new)
function formatPoints(value) {
  return value.toString().padStart(2, "0");
}

function updateUI() {
  // ⭐ Replace original line with formatted version
  document.getElementById("points-count").textContent = formatPoints(points);

  // Unlock CSS when points >= 30
  if (points >= 30) {
    const cssBtn = document.getElementById("css-btn");
    cssBtn.classList.remove("locked");
    cssBtn.style.pointerEvents = "auto";
  }

  // Unlock JS when points >= 50
  if (points >= 50) {
    const jsBtn = document.getElementById("js-btn");
    jsBtn.classList.remove("locked");
    jsBtn.style.pointerEvents = "auto";
  }

  document.getElementById("html-progress").textContent = `${htmlProgress}/30`;
  document.getElementById("css-progress").textContent = `${cssProgress}/50`;
  document.getElementById("js-progress").textContent = `${jsProgress}/60`;
}

// HTML Module Click Handler
document.getElementById("html-btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (htmlProgress < 30) {
    htmlProgress += 5;
    points += 5;
    updateUI();
  }
});

// CSS Module
document.getElementById("css-btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (!document.getElementById("css-btn").classList.contains("locked")) {
    if (cssProgress < 50) {
      cssProgress += 5;
      points += 5;
      updateUI();
    }
  }
});

// JS Module
document.getElementById("js-btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (!document.getElementById("js-btn").classList.contains("locked")) {
    if (jsProgress < 60) {
      jsProgress += 5;
      points += 5;
      updateUI();
    }
  }
});
