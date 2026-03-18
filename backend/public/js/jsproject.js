// ==========================
// JS PROJECT SCRIPT
// ==========================

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  setupSidebar();
  setupProfile();
  setupAlerts();
  loadPortfolio();     // Load saved CSS portfolio
  setupRunButton();    // Run JS code
  setupSubmit(); 
  loadNavbarPoints();      // Save portfolio
});

// ===== LOAD CSS PORTFOLIO HTML =====
function loadPortfolio() {
  const savedHTML = localStorage.getItem("userPortfolioHTML"); // HTML from CSS project
  const htmlInput = document.getElementById("htmlInput");
  const output = document.getElementById("output");

  if (savedHTML) {
    if (htmlInput) htmlInput.value = savedHTML;
    if (output) output.innerHTML = savedHTML;
  }
}

// ===== RUN JS CODE =====
function setupRunButton() {
  const runBtns = document.querySelectorAll(".run-btn");
  runBtns.forEach(btn => {
    btn.addEventListener("click", runCode);
  });
}

function runCode() {
  const html = document.getElementById("htmlInput").value;
  const js = document.getElementById("jsInput").value;
  const output = document.getElementById("output");

  output.innerHTML = ""; // Clear previous output

  const iframe = document.createElement("iframe");
  iframe.style.width = "100%";
  iframe.style.height = "500px";
  output.appendChild(iframe);

  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(`
    ${html}
    <script>
      try {
        ${js}
      } catch(e) {
        document.body.innerHTML += '<p style="color:red;">JS Error: ' + e + '</p>';
      }
    <\/script>
  `);
  doc.close();
}

// ===== SUBMIT PORTFOLIO =====
function setupSubmit() {
  const submitBtn = document.getElementById("submitBtn");
  if (!submitBtn) return;

  submitBtn.addEventListener("click", async () => {
    const html = document.getElementById("htmlInput").value.trim();
    const js = document.getElementById("jsInput").value.trim();
    const email = localStorage.getItem("userEmail");

    if (!html) return showAlert("⚠️ Your portfolio HTML is empty!");
    if (!js) return showAlert("⚠️ Please write some JavaScript to make it interactive!");
    if (!email) return showAlert("⚠️ User not logged in!");

    try {
      // ===== SAVE TO BACKEND =====
      await fetch("/save-portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          portfolioHTML: html,
          portfolioJS: js
        })
      });

      // ===== SAVE TO LOCALSTORAGE =====
      localStorage.setItem("userPortfolioHTML", html);
      localStorage.setItem("userPortfolioJS", js);

      showAlert("🎉 Portfolio saved successfully!");
    } catch (err) {
      console.error(err);
      showAlert("❌ Failed to save portfolio. Please try again.");
    }
  });
}

// ===== ALERT SYSTEM =====
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

// ===== PROFILE =====
function setupProfile() {
  const usernameEl = document.getElementById("home-username");
  const profilePicEl = document.getElementById("home-profile-pic");
  usernameEl.textContent = localStorage.getItem("username") || "Username";
  profilePicEl.src = localStorage.getItem("profilePic") || "/images/default.png";
}

async function loadNavbarPoints() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}&subject=js`);
    const data = await res.json();
    const pointsEl = document.getElementById("points-count");
    if (pointsEl) pointsEl.innerText = (data.points || 0).toString().padStart(2, "0");
  } catch (err) {
    console.error("Failed to load points:", err);
  }
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

  document.querySelectorAll(".arrow").forEach(a => {
    a.addEventListener("click", e => {
      e.stopPropagation();
      const submenu = a.parentElement.nextElementSibling;
      if (submenu) submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    });
  });
}