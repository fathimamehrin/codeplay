// ==========================
// GLOBAL POINTS
// ==========================
let points = 0;
let gameCompleted = false;


const params = new URLSearchParams(window.location.search);
const fromLesson = Number(params.get("from")) || 0;


// ==========================
// RESTORE FROM BACKEND
// ==========================
async function restoreProgressFromBackend() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const response = await fetch(`/get-progress?email=${email}&subject=html`);
    const data = await response.json();

    points = Number(data.points) || 0;

    const pointEl = document.getElementById("points-count");
    if (pointEl) {
      pointEl.innerText = points;
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
        subject: "html",
        value: value,
        game: "htmlGame3"
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
// WINDOW LOAD
// ==========================
window.onload = async function () {
  const username = localStorage.getItem("username");
  const profilePic = localStorage.getItem("profilePic");

  const profileNameEl = document.querySelector(".profile-name");
  const profileIconEl = document.getElementById("home-profile-pic");

  profileNameEl.textContent = username?.trim() || "Profile";
  profileIconEl.src = profilePic?.trim() || "/images/Ellipse 1.png";

  await restoreProgressFromBackend();

  if (cards.length > 0) {
    cards[0].classList.add("active");
  }
  
};
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

// ====================== LOG OUT ====================== //
document.getElementById("removeAccount").addEventListener("click", e => {
  e.preventDefault();

  if (!confirm("Are you sure you want to log out?")) return;

  localStorage.clear();
  window.location.href = "about.html";
});
 //game logic

const cards = document.querySelectorAll(".card:not(.finish)");
let index = 0;

async function check() {
  const card = cards[index];
  const input = card.querySelector("input");
  if (!input) return;

  const correct = input.dataset.answer.toLowerCase();
  const user = input.value.toLowerCase().trim();

  if (user === correct) {
    card.classList.add("exit");

    setTimeout(async () => {
      card.classList.remove("active");
      index++;

      // ✅ If more cards exist
      if (index < cards.length) {
        cards[index].classList.add("active");
      }

      // ✅ If last card completed
      else if (!gameCompleted) {
        gameCompleted = true;

       // show finish card
  const finishCard = document.querySelector(".card.finish");
  if (finishCard) finishCard.classList.add("active");

  // show completion message
  const msg = document.getElementById("completion-message");
  if (msg) msg.style.display = "block";

  console.log("Game finished");
  
        await updateProgressToBackend(5); // 🎯 Give points once
      }

    }, 300);

  } else {
    input.style.border = "2px solid red";
    setTimeout(() => input.style.border = "", 500);
  }
}

function prevLesson() {
  window.location.href = `lesson.html?lesson=${fromLesson}`;
}

function nextLesson() {
  window.location.href = `lesson.html?lesson=${fromLesson + 1}`;
}