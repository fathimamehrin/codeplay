let points = 0;

// ===== INIT =====
document.addEventListener("DOMContentLoaded", async function () {
  setupSidebar();
  setupProfile();
  setupAlerts();
  setupSubmit();

  // Load user progress from backend
  const email = localStorage.getItem("userEmail");
  if (!email) return;
  try {
    const res = await fetch(`/get-progress?email=${email}`);
    const data = await res.json();
    console.log("User data:", data);
    applyBackendData(data);
  } catch (err) {
    console.error(err);
  }
});

// ===== PROFILE =====
function setupProfile() {
  const usernameEl = document.getElementById("home-username");
  const profilePicEl = document.getElementById("home-profile-pic");
  usernameEl.textContent = localStorage.getItem("username") || "Username";
  profilePicEl.src = localStorage.getItem("profilePic") || "/images/default.png";
}

// ===== SIDEBAR =====
function setupSidebar() {
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  if (menuBtn && sidebar && overlay) {
    menuBtn.addEventListener("click", () => { sidebar.classList.add("open"); overlay.classList.add("show"); });
    overlay.addEventListener("click", () => { sidebar.classList.remove("open"); overlay.classList.remove("show"); });
  }

  document.querySelectorAll(".arrow").forEach(a => {
    a.addEventListener("click", e => {
      e.stopPropagation();
      const submenu = a.parentElement.nextElementSibling;
      if (submenu) submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
  });
}

// ===== ALERTS =====
function setupAlerts() {
  fetch("alert.html").then(res => res.text()).then(html => {
    document.body.insertAdjacentHTML("beforeend", html);
    const overlay = document.getElementById("alertOverlay");
    if (overlay) overlay.addEventListener("click", closeAlert);
  });
}

function showAlert(msg) {
  const alertBox = document.getElementById("customAlert");
  const overlay = document.getElementById("alertOverlay");
  const alertMessage = document.getElementById("alertMessage");
  if (!alertBox || !overlay || !alertMessage) return;
  alertMessage.innerHTML = msg;
  alertBox.style.display = "block";
  overlay.style.display = "block";
}

function closeAlert() {
  const alertBox = document.getElementById("customAlert");
  const overlay = document.getElementById("alertOverlay");
  if (alertBox) alertBox.style.display = "none";
  if (overlay) overlay.style.display = "none";
}

// ===== RUN CODE =====
function runCode() {
  const code = document.getElementById("codeInput").value.trim();
  const output = document.getElementById("output");
  if (!code) return showAlert("Write HTML code first!");
  output.innerHTML = code;
}

// ===== SUBMIT =====
function setupSubmit() {
  const submitBtn = document.getElementById("submitBtn");
  if (!submitBtn) return;

  submitBtn.addEventListener("click", async () => {
    const code = document.getElementById("codeInput").value.trim();
    if (!code) return showAlert("Code cannot be empty!");

    const lower = code.toLowerCase();
    const required = ["<html", "<head", "<body", "<h1", "<p", "<img", "<ul", "<a"];
    const missing = required.filter(tag => !lower.includes(tag));
    if (missing.length) return showAlert("Missing tags:<br>" + missing.join("<br>"));
    if (!lower.includes("alt=")) return showAlert("Image must have an alt attribute.");

    showAlert("🎉 Project submitted successfully!");

    // ===== SAVE TO BACKEND =====
    const email = localStorage.getItem("userEmail");
    if (!email) return;

    try {
      await fetch("/save-portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          portfolioHTML: code // store the user-created HTML
        })
      });
      console.log("User portfolio saved to backend.");

      // Optional: also store in localStorage for instant CSS project display
      localStorage.setItem("userPortfolioHTML", code);

    } catch (err) {
      console.error("Failed to save portfolio to backend:", err);
    }
  });
}

// ===== BACKEND DATA =====
function applyBackendData(data) {
  // Get points from backend or fallback to localStorage or 0
  points = data.points ?? Number(localStorage.getItem("points")) ?? 0;

  // Display points in navbar
  const pointsEl = document.getElementById("points-count");
  if (pointsEl) pointsEl.textContent = points.toString().padStart(2, "0");

  // If backend includes saved portfolio HTML, display it in editor/output
  if (data.portfolioHTML) {
    const codeInput = document.getElementById("codeInput");
    const output = document.getElementById("output");
    if (codeInput) codeInput.value = data.portfolioHTML;
    if (output) output.innerHTML = data.portfolioHTML;
  }
}