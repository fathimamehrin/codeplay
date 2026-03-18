// ==========================
// CSS PROJECT JS
// ==========================

document.addEventListener("DOMContentLoaded", () => {
  setupNavbar();
  loadNavbarPoints();
  setupSidebar();
  loadUserPortfolio();
  setupSubmit();
});

// ==========================
// LOAD USER INFO
// ==========================
function setupNavbar() {
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");

  const usernameEl = document.getElementById("home-username");
  const profileEl = document.getElementById("home-profile-pic");

  if (usernameEl) usernameEl.textContent = username || "Username";
  if (profileEl) {
    profileEl.src = profilePic || "/images/default.png";
    profileEl.style.width = "35px";
    profileEl.style.height = "35px";
    profileEl.style.borderRadius = "50%";
  }
}

// ==========================
// LOAD POINTS FROM BACKEND
// ==========================
async function loadNavbarPoints() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}&subject=css`);
    const data = await res.json();
    const pointsEl = document.getElementById("points-count");
    if (pointsEl) pointsEl.innerText = (data.points || 0).toString().padStart(2, "0");
  } catch (err) {
    console.error("Failed to load points:", err);
  }
}

// ==========================
// SIDEBAR TOGGLE
// ==========================
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

  document.querySelectorAll(".arrow").forEach(a => {
    a.addEventListener("click", e => {
      e.stopPropagation();
      const submenu = a.parentElement.nextElementSibling;
      if (submenu) submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    });
  });
}

// ==========================
// LOAD SAVED PORTFOLIO
// ==========================
function loadUserPortfolio() {
  const savedHTML = localStorage.getItem("userPortfolioHTML");
  if (!savedHTML) return;

  const htmlInput = document.getElementById("htmlInput");
  const cssInput = document.getElementById("cssInput"); // optional if you want to load CSS too
  const output = document.getElementById("output");

  if (htmlInput) htmlInput.value = savedHTML;
  if (output) output.innerHTML = savedHTML;
}

// ==========================
// RUN CODE (HTML + CSS)
// ==========================
function runCode() {
  const html = document.getElementById("htmlInput").value;
  const css = document.getElementById("cssInput").value;
  const output = document.getElementById("output");

  if (!output) return;

  output.innerHTML = `
    <style>${css}</style>
    ${html}
  `;
}

// ==========================
// SUBMIT PORTFOLIO
// ==========================
function setupSubmit() {
  const submitBtn = document.getElementById("submitBtn");
  if (!submitBtn) return;

  submitBtn.addEventListener("click", async () => {
    const html = document.getElementById("htmlInput").value.trim();
    const css = document.getElementById("cssInput").value.trim().toLowerCase();
    const output = document.getElementById("output");

    if (!html) return showAlert("Write HTML code first!");
    if (!css) return showAlert("Write CSS code first!");
    if (!output || !output.innerHTML.trim()) return showAlert("Run your code first!");

    const portfolioHTML = output.innerHTML.trim(); // <-- final output

    // CSS validation
    const missing = [];
    if (!css.includes("background")) missing.push("background color");
    if (!css.includes("color")) missing.push("text color");
    if (!css.includes("border") && !css.includes("box-shadow")) missing.push("border or box-shadow");
    if (!css.includes(":hover")) missing.push("hover effect");
    if (!css.includes("border-radius")) missing.push("border-radius for image");

    if (missing.length) return showAlert("Missing CSS features:<br>" + missing.join("<br>"));

    showAlert("🎉 CSS Project submitted successfully!");

    // ===== SAVE TO BACKEND =====
    const email = localStorage.getItem("userEmail");
    if (!email) return;

    try {
      await fetch("/save-portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, portfolioHTML: portfolioHTML })
      });

      console.log("Portfolio saved to backend.");

      // Save in localStorage for JS project
      localStorage.setItem("userPortfolioHTML", portfolioHTML);

    } catch (err) {
      console.error("Failed to save portfolio:", err);
      showAlert("Failed to save portfolio. Please try again.");
    }
  });
}

// ==========================
// CUSTOM ALERT
// ==========================
function showAlert(msg) {
  let alertBox = document.getElementById("customAlert");
  let overlay = document.getElementById("alertOverlay");
  let alertMessage = document.getElementById("alertMessage");

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