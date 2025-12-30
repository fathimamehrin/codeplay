const LESSON_ID = "lesson_h1"; // change per page

function runCode() {
  const editor = document.getElementById("editor");
  const iframe = document.getElementById("output");
  const code = editor.value;

  // Show output
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

  // Mark lesson completed
  sessionStorage.setItem(`${LESSON_ID}_completed`, "true");

  // Add points only once per page
  if (!sessionStorage.getItem(`${LESSON_ID}_points_given`)) {
    let points = parseInt(sessionStorage.getItem("points")) || 0;
    points += 2;

    sessionStorage.setItem("points", points);
    sessionStorage.setItem(`${LESSON_ID}_points_given`, "true");

    updatePointsUI(points);
  }
}

// NEXT button logic
function goNext() {
  if (sessionStorage.getItem(`${LESSON_ID}_completed`) === "true") {
    window.location.href = "/html/HTMLElements/p.html";
  } else {
    alert("Please try the example and click Run before moving to the next lesson.");
  }
}

// Update points in navbar
function updatePointsUI(points) {
  const pointSpan = document.querySelector(".point-span");
  if (pointSpan) {
    pointSpan.textContent = points.toString().padStart(2, "0");
  }
}

// Reset points on refresh
window.onload = function () {
  sessionStorage.clear();       // 🔁 reset everything for this session
  updatePointsUI(0);            // show 00 in navbar
};
