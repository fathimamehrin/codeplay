let cssPoints = 0;

// ===== INIT =====
document.addEventListener("DOMContentLoaded", async function () {
  setupSidebar();
  setupProfile();
  setupAlerts();
  setupSubmit();

  // Load portfolio HTML from backend
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {

  const res = await fetch(`/get-profile?email=${email}`);

  const text = await res.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch (e) {
    console.error("Server returned HTML instead of JSON:", text);
    return;
  }

  console.log("User profile:", data);
  applyBackendData(data);

} catch (err) {
  console.error(err);
}
});


// ===== PROFILE =====
function setupProfile() {
  const usernameEl = document.getElementById("home-username");
  const profilePicEl = document.getElementById("home-profile-pic");

  if (usernameEl)
    usernameEl.textContent = localStorage.getItem("username") || "Username";

  if (profilePicEl)
    profilePicEl.src = localStorage.getItem("profilePic") || "/images/default.png";
}


// ===== SIDEBAR =====
function setupSidebar() {
  const menuBtn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  if (menuBtn && sidebar && overlay) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.add("open");
      overlay.classList.add("show");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
    });
  }

  // Logout
  const logoutBtn = document.getElementById("removeAccount");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", e => {
      e.preventDefault();
      if (!confirm("Are you sure you want to log out?")) return;
      localStorage.clear();
      window.location.href = "about.html";
    });
  }
}


// ===== ALERTS =====
function setupAlerts() {
  fetch("alert.html")
    .then(res => res.text())
    .then(html => {
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
  const cssCode = document.getElementById("cssInput").value.trim();

  if (!cssCode) return showAlert("Write CSS code first!");

  let styleTag = document.getElementById("user-style");

  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = "user-style";
    document.head.appendChild(styleTag);
  }

  styleTag.innerHTML = cssCode;
}


// ===== SUBMIT =====
function setupSubmit() {
  const submitBtn = document.getElementById("submitBtn");
  if (!submitBtn) return;

  submitBtn.addEventListener("click", async () => {

    const cssCode = document.getElementById("cssInput").value.trim();
    if (!cssCode) return showAlert("Please write some CSS!");

    const email = localStorage.getItem("userEmail");
    if (!email) return;

    try {

      const res = await fetch("/save-css-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          cssCode: cssCode
        })
      });

      const data = await res.json();

      if (data.success) {
        showAlert("🎉 CSS Project submitted successfully!");
      } else {
        showAlert("Error submitting project.");
      }

    } catch (err) {
      console.error(err);
      showAlert("Server error.");
    }

  });
}


// ===== BACKEND DATA =====
function applyBackendData(data) {

  const output = document.getElementById("output");
  const cssInput = document.getElementById("cssInput");

  // Load HTML created in HTML project
  if (data.profileHTML && output) {
    output.innerHTML = data.profileHTML;
  } else if (output) {
    output.innerHTML = "<p>Complete HTML project first!</p>";
  }

  // Load previously saved CSS
  if (data.cssCode && cssInput) {
    cssInput.value = data.cssCode;
    runCode();
  }

  // Load points if available
  cssPoints = data.points ?? Number(localStorage.getItem("points")) ?? 0;

  const pointsEl = document.getElementById("points-count");
  if (pointsEl)
    pointsEl.textContent = cssPoints.toString().padStart(2, "0");
}