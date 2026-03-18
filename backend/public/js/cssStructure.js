const email = localStorage.getItem("userEmail");

if (email) {
  fetch("/save-last-page", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      lastVisited: window.location.pathname + window.location.search
    })
  });
}


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

    const res = await fetch(`/get-progress?email=${email}&subject=css`);
    const data = await res.json();

    const points = data.points || 0;

    document.getElementById("point").innerText = points;

  } catch (err) {

    console.error("❌ Failed to restore points", err);

  }
}


// ==========================
// ✅ CSS INTRO & STRUCTURE (FIXED)
// ==========================

const currentPage = window.location.pathname;

// ---------- CSS INTRO ----------
if (currentPage.includes("cssintro.html")) {

  if (!localStorage.getItem("cssIntroDone")) {
    localStorage.setItem("cssIntroDone", "true");
  }
}

// ---------- CSS STRUCTURE ----------
if (currentPage.includes("cssStructure.html")) {

  if (!localStorage.getItem("cssStructureDone")) {
    localStorage.setItem("cssStructureDone", "true");
  }
}