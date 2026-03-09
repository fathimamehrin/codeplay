// ==========================
// GLOBAL POINTS
// ==========================
let points = 0;
const params = new URLSearchParams(window.location.search);
const fromLesson = Number(params.get("lesson") || params.get("from")) || 0;

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

    const pointEl = document.getElementById("point");
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
        game: "htmlGame1"
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

// ==========================
// DRAG GAME LOGIC
// ==========================
let draggedTag = null;
let correctCount = 0;

const dragItems = document.querySelectorAll(".drag-item");
const dropBoxes = document.querySelectorAll(".drop-box");
const popper = document.getElementById("popper");

dragItems.forEach(item => {
  item.addEventListener("dragstart", () => {
    draggedTag = item.dataset.tag;
  });
});

dropBoxes.forEach(box => {
  box.addEventListener("dragover", e => e.preventDefault());

  box.addEventListener("drop", async () => {
    const correctTag = box.dataset.answer;
    const symbol = box.querySelector("span");

    if (box.classList.contains("done")) return;

    if (draggedTag === correctTag) {
      symbol.textContent = " ✅";
      symbol.className = "correct";

      correctCount++;
      box.classList.add("done");

      if (correctCount === dropBoxes.length) {
        await launchPopper();
      }

    } else {
      symbol.textContent = " ❌";
      symbol.className = "wrong";
    }
  });
});

// ==========================
// GAME COMPLETE
// ==========================
async function launchPopper() {

  // Prevent double reward
  const alreadyCompleted = sessionStorage.getItem("htmlGameCompleted");
  if (alreadyCompleted) return;

  sessionStorage.setItem("htmlGameCompleted", "true");

  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  for (let i = 0; i < 120; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = centerX + "px";
    confetti.style.top = centerY + "px";

    const x = (Math.random() - 0.5) * 600;
    const y = (Math.random() - 0.5) * 600;

    confetti.style.setProperty("--x", x + "px");
    confetti.style.setProperty("--y", y + "px");

    confetti.style.backgroundColor =
      `hsl(${Math.random() * 360}, 100%, 60%)`;

    popper.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1400);
  }

  document.getElementById("completion-message").style.display = "block";

  // ✅ Add 5 points from backend
  await updateProgressToBackend(5);
}

function prevLesson() {
  if (fromLesson > 0) {
    window.location.href = `lesson.html?lesson=${fromLesson - 1}`;
  }
}

function nextLesson() {
  window.location.href = `lesson.html?lesson=${fromLesson + 1}`;
}