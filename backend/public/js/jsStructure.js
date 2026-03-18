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

// ==========================
// NAVBAR
// ==========================

window.onload = async () => {

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("userEmail");
  const profilePic = localStorage.getItem("profilePic");

  // ---------- USERNAME ----------
  document.getElementById("home-username").textContent =
    username || "Username";

  // ---------- PROFILE PICTURE ----------
  const profileEl = document.getElementById("home-profile-pic");

  profileEl.src = profilePic || "/images/default.png";
  profileEl.style.width = "35px";
  profileEl.style.height = "35px";
  profileEl.style.borderRadius = "50%";

  if (!email) return;

  // ---------- RESTORE POINTS ----------
  await restorePointsFromBackend();
};

// ==========================
// RESTORE POINTS
// ==========================
async function restorePointsFromBackend() {

  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {

    const res = await fetch(`/get-progress?email=${email}&subject=js`);
    const data = await res.json();

    const points = data.points || 0;

    document.getElementById("point").innerText = points;

  } catch (err) {

    console.error("❌ Failed to restore points", err);

  }
}

const currentPage = window.location.pathname;

// JS INTRO
if (currentPage.includes("jsintro.html")) {
  localStorage.setItem("jsIntroDone", "true");
}

// JS STRUCTURE
if (currentPage.includes("jsStructure.html")) {
  localStorage.setItem("jsStructureDone", "true");
}