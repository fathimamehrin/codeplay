const player = document.getElementById("player");
const target = document.getElementById("target");
const cssInput = document.getElementById("cssInput");
const checklist = document.querySelectorAll("#checklist li");
const celebration = document.getElementById("celebration");

let alreadyCelebrated = false;

// Live update while typing
cssInput.addEventListener("input", updateStyles);

function updateStyles() {

  // Remove old user styles
  const oldStyle = document.getElementById("userStyle");
  if (oldStyle) oldStyle.remove();

  // Apply new CSS
  const styleTag = document.createElement("style");
  styleTag.id = "userStyle";
  styleTag.innerHTML = cssInput.value;
  document.head.appendChild(styleTag);

  checkProgress();
}

function checkProgress() {

  const playerStyles = getComputedStyle(player);
  const targetStyles = getComputedStyle(target);

  let allCompleted = true;

  checklist.forEach(item => {

    const prop = item.dataset.prop;

    if (playerStyles[prop] === targetStyles[prop]) {

      item.classList.add("completed");

      if (!item.textContent.includes("✅")) {
        item.textContent = "✅ " + item.textContent.replace("⬜ ", "");
      }

    } else {

      item.classList.remove("completed");

      if (!item.textContent.includes("⬜")) {
        item.textContent = "⬜ " + item.textContent.replace("✅ ", "");
      }

      allCompleted = false;
    }

  });

  if (allCompleted && !alreadyCelebrated) {
    alreadyCelebrated = true;
    triggerCelebration();
  }

}

function triggerCelebration() {

  celebration.style.display = "flex";

  // Create confetti
  for (let i = 0; i < 150; i++) {

    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    confetti.style.animationDuration =
      (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }

  // Hide popup after 3 seconds
  setTimeout(() => {
    celebration.style.display = "none";
  }, 3000);
}