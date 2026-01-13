/* =========================================
   AUTO-GENERATED LESSON ID (from page name)
   Example:
   h1.html  -> lesson_h1
   p.html   -> lesson_p
========================================= */
const LESSON_ID =
  "lesson_" +
  location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

/* =========================================
   RUN CODE FUNCTION
   - Shows output
   - Marks lesson completed
   - Adds +2 points ONLY ONCE per lesson
========================================= */
function runCode() {
  const editor = document.getElementById("editor");
  const iframe = document.getElementById("output");
  const code = editor.value;

  // Hide editor, show output
  editor.style.display = "none";
  iframe.style.display = "block";

  // Write code into iframe
  iframe.contentDocument.open();
  iframe.contentDocument.write(`
    <!DOCTYPE html>
    <html>
      <body contenteditable="true">
        ${code}
      </body>
    </html>
  `);
  iframe.contentDocument.close();

  // Mark lesson as completed
  sessionStorage.setItem(`${LESSON_ID}_completed`, "true");

  // Give points only ONCE per lesson
  if (!sessionStorage.getItem(`${LESSON_ID}_points_given`)) {
    let points = parseInt(sessionStorage.getItem("points")) || 0;
    points += 2;

    sessionStorage.setItem("points", points);
    sessionStorage.setItem(`${LESSON_ID}_points_given`, "true");

    updatePointsUI(points);
  }
}

/* =========================================
   NEXT BUTTON LOGIC
   - Checks if lesson is completed
   - Redirects using data-next attribute
========================================= */
function goNext() {
  if (sessionStorage.getItem(`${LESSON_ID}_completed`) === "true") {
    const nextBtn = document.getElementById("nextBtn");
    const nextPage = nextBtn.dataset.next;
    window.location.href = nextPage;
  } else {
    showAlert();
  }
}

/* =========================================
   UPDATE POINTS IN NAVBAR
========================================= */
function updatePointsUI(points) {
  const pointSpan = document.querySelector(".point-span");
  if (pointSpan) {
    pointSpan.textContent = points.toString().padStart(2, "0");
  }
}

function loadAlert() {
  fetch("/html/HTMLElements/alert.html")
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);
    });
}

function showAlert() {
  document.getElementById("customAlert").style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
}


/* =========================================
   LOAD POINTS ON PAGE REFRESH
========================================= */
window.onload = function () {
  loadAlert();

  const points = parseInt(sessionStorage.getItem("points")) || 0;
  updatePointsUI(points);
};
