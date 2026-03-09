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
        game: "htmlGame2"
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



const startBtn = document.getElementById("startGame");
const storyScreen = document.getElementById("storyScreen");
const gameScreen = document.getElementById("gameScreen");

startBtn.addEventListener("click", () => {
  storyScreen.classList.remove("active");
  gameScreen.classList.add("active");
});

const runBtn = document.getElementById("run");
const codeArea = document.getElementById("code");
const preview = document.getElementById("preview");
const message = document.getElementById("message");
const task = document.getElementById("task");

let level = 1;

runBtn.addEventListener("click", async() => {
  const code = codeArea.value.toLowerCase();

  if (level === 1) {
    if (code.includes("<table") && code.includes("<th")) {
      preview.innerHTML = codeArea.value;
      message.textContent = "✅ Good job! Headers added.";
      message.className = "correct";

      task.textContent =
        "Task 2: Add at least one product row using <tr> and <td>";
      level = 2;
    } else {
      message.textContent =
        "❌ You need a <table> and <th> tags.";
      message.className = "wrong";
    }
  }

  else if (level === 2) {
  if (code.includes("<td")) {
    preview.innerHTML = codeArea.value;
    message.textContent = "🎉 Bill Completed Successfully!";
    message.className = "correct";

    if (!gameCompleted) {
      await updateProgressToBackend(5);
      gameCompleted = true;
    }

  } else {
    message.textContent =
      "❌ Add product data using <td>.";
    message.className = "wrong";
  }
}

  document.getElementById("completion-message").style.display = "block";

  // ✅ Add 5 points from backend
  await updateProgressToBackend(5);
});

function prevLesson() {
  window.location.href = `lesson.html?lesson=${fromLesson-1}`;
}

function nextLesson() {
  window.location.href = `lesson.html?lesson=${fromLesson + 1}`;
}
