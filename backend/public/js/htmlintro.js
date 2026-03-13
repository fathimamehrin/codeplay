// ==========================
// GLOBAL VARIABLES
// ==========================
let currentLesson = 0;
let canGoNext = false;
let points = 0;
let completedLessons = JSON.parse(localStorage.getItem("completedLessons")) || {};

// ==========================
// DOM ELEMENTS
// ==========================
const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");
const lessonList = document.getElementById("lessonList");

// ==========================
// PAGE LOAD
// ==========================
window.onload = async () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("userEmail");
  const profilePic = localStorage.getItem("profilePic");

  // ---------- PROFILE ----------
  document.getElementById("home-username").textContent = username || "Username";
  const profileEl = document.getElementById("home-profile-pic");
  profileEl.src = profilePic || "/images/default.png";
  profileEl.style.width = "35px";
  profileEl.style.height = "35px";
  profileEl.style.borderRadius = "50%";

  if (!email) return;

  // Restore completed lessons
  const savedLessons = localStorage.getItem("completedLessons");
  if (savedLessons) completedLessons = JSON.parse(savedLessons);

  // Restore progress from backend
  await restoreProgressFromBackend();

  // Load lesson from URL if provided
  const params = new URLSearchParams(window.location.search);
  const lessonFromUrl = params.get("lesson");
  if (lessonFromUrl !== null) currentLesson = Number(lessonFromUrl);

  loadLesson(currentLesson);
};

// ==========================
// NAVBAR / MENU CONFIG
// ==========================
const menuItems = [
  { name: "h1 to h6", index: 0 },
  { name: "p", index: 1 },
  { name: "br", index: 2 },
  { name: "a", index: 3 },
  {
    name: "HTML Formatting Elements",
    submenu: [
      { name: "Bold Text (<b>)", index: 4 },
      { name: "Italic Text (<i>)", index: 5 },
      { name: "Underlined Text (<u>)", index: 6 }
    ]
  }
];

// Build menu dynamically
lessonList.innerHTML = "";

menuItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item.name;

  if (!item.submenu) {
    li.addEventListener("click", () => {
      loadLesson(item.index);
      dropdownMenu.classList.remove("show");
    });
  } else {
    li.classList.add("has-submenu");

    const subUl = document.createElement("ul");
    subUl.classList.add("submenu");

    item.submenu.forEach(sub => {
      const subLi = document.createElement("li");
      subLi.textContent = sub.name;
      subLi.addEventListener("click", e => {
        e.stopPropagation();
        loadLesson(sub.index);
        dropdownMenu.classList.remove("show");
      });
      subUl.appendChild(subLi);
    });

    li.appendChild(subUl);

    li.addEventListener("click", e => {
      e.stopPropagation();
      li.classList.toggle("submenu-open");
    });
  }

  lessonList.appendChild(li);
});

// Menu toggle
menuIcon.addEventListener("click", e => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("show");
});
document.addEventListener("click", () => dropdownMenu.classList.remove("show"));

// ==========================
// RESTORE PROGRESS
// ==========================
async function restoreProgressFromBackend() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;
  try {
    const res = await fetch(`/get-progress?email=${email}&subject=html`);
    const data = await res.json();
    points = data.points || 0;
    document.getElementById("point").innerText = points;
  } catch (err) {
    console.error("Failed to restore progress", err);
  }
}

// ==========================
// LOAD LESSON
// ==========================
function loadLesson(index) {
  if (!lessons[index]) return;
  currentLesson = index;
  const lesson = lessons[index];

  document.getElementById("lesson-title").innerHTML = lesson.title;
  document.getElementById("lesson-desc").innerHTML = lesson.desc;
  document.getElementById("lesson-top").innerHTML = lesson.top;
  document.getElementById("lesson-middle").innerHTML = lesson.middle;
  document.getElementById("lesson-bottom").innerHTML = lesson.bottom;

  const editor = document.getElementById("editor");
  editor.value = "";
  editor.style.display = "block";
  document.getElementById("output").style.display = "none";

  canGoNext = !!completedLessons[index];
}