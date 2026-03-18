// ==========================
// GLOBAL
// ==========================
let cssPoints = 0;
let level = 0;

const params = new URLSearchParams(window.location.search);
const fromLesson = Number(params.get("cssLesson")) || 0;


// ==========================
// RESTORE FROM BACKEND
// ==========================
async function restoreProgressFromBackend() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const response = await fetch(`/get-progress?email=${email}&subject=css`);
    const data = await response.json();

    cssPoints = Number(data.points) || 0;

    const pointEl = document.getElementById("point");
    if (pointEl) {
      pointEl.innerText = cssPoints;
    }

  } catch (err) {
    console.error("❌ Failed to restore progress", err);
  }
}

// ==========================
// UPDATE BACKEND
// ==========================
async function updateProgressToBackend(value) {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const response = await fetch("/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        subject: "css",
        value: value,
        game: "cssGame1"
      })
    });

    if (!response.ok) {
      throw new Error("Server error");
    }

    await restoreProgressFromBackend();

  } catch (err) {
    console.error("❌ Failed to update progress", err);
  }
}

// ==========================
// PAGE LOAD
// ==========================
// ==========================
window.onload = async function () {
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");

  const profileNameEl = document.querySelector(".profile-name");
  const profileIconEl = document.getElementById("home-profile-pic");

  profileNameEl.textContent = username?.trim() || "Profile";
  profileIconEl.src = profilePic?.trim() || "/images/Ellipse 1.png";

  profileIconEl.style.width = "35px";
  profileIconEl.style.height = "35px";
  profileIconEl.style.borderRadius = "50%";


  await restoreProgressFromBackend();
  loadLevel();
};

// ==========================
// SIDEBAR SAFETY
// ==========================
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

  // ====================== LOG OUT ====================== //
document.getElementById("removeAccount").addEventListener("click", e => {
  e.preventDefault();

  if (!confirm("Are you sure you want to log out?")) return;

  localStorage.clear();
  window.location.href = "about.html";
});

// ==========================
// GAME LEVELS
// ==========================
const prompts = [
  { text: "Make the text blue", rules: { "color": "blue" } },
  { text: "Increase the font size to 24px", rules: { "font-size": "24px" } },
  { text: "Change the font family to Arial", rules: { "font-family": "arial" } },
  { text: "Make the text bold", rules: { "font-weight": "bold" } },
  { text: "Make the text red and bold", rules: { "color": "red", "font-weight": "bold" } }
];

const promptEl = document.getElementById("game1-prompt");
const editor = document.getElementById("game1-editor");
const target = document.getElementById("target-text");
const result = document.getElementById("game1-result");

function loadLevel() {

  if (level >= prompts.length) return;

  promptEl.textContent = prompts[level].text;
  editor.value = "";
  target.style.cssText = "";
  result.textContent = "";
}

function getCSSValue(property, css) {
  const regex = new RegExp(property + "\\s*:\\s*([^;]+)", "i");
  const match = css.match(regex);
  return match ? match[1].trim().toLowerCase() : null;
}

function checkCSS() {

  const css = editor.value;
  const rules = prompts[level].rules;

  let isCorrect = true;

  for (let prop in rules) {
    const expectedValue = rules[prop].toLowerCase();
    const actualValue = getCSSValue(prop, css);

    if (!actualValue || actualValue !== expectedValue) {
      isCorrect = false;
      break;
    }
  }

  if (isCorrect) {

    target.style.cssText = css;
    level++;

    if (level < prompts.length) {
      setTimeout(loadLevel, 1000);
    } else {
      finishGame();
    }

  } else {
    result.textContent = "❌ Try again!";
    result.style.color = "#ff6b6b";
  }
}

async function finishGame() {

  const email = localStorage.getItem("userEmail");
  if (!email) return;

  await updateProgressToBackend(5);

  result.textContent = "🎉 Game Completed!";
  result.style.color = "#4CAF50";
}
// ==========================
// FINISH GAME
// ==========================


function prevCssLesson() {
  window.location.href = `cssLesson.html?cssLesson=${fromLesson-1}`;
}

function nextCssLesson() {
  window.location.href = `cssLesson.html?cssLesson=${fromLesson + 1}`;
}