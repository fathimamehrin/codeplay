let points = 00;
let htmlProgress = 0;
let cssProgress = 0;
let jsProgress = 0;

function updateUI() {
  document.getElementById("points-count").textContent = points;

  
  if (points >= 30) {
    const cssBtn = document.getElementById("css-btn");
    cssBtn.classList.remove("locked");
    cssBtn.style.pointerEvents = "auto";
  }

 
  if (points >= 50) {
    const jsBtn = document.getElementById("js-btn");
    jsBtn.classList.remove("locked");
    jsBtn.style.pointerEvents = "auto";
  }

  document.getElementById("html-progress").textContent = `${htmlProgress}/30`;
  document.getElementById("css-progress").textContent = `${cssProgress}/50`;
  document.getElementById("js-progress").textContent = `${jsProgress}/60`;
}

document.getElementById("html-btn").addEventListener("click", (e) => {
 
  e.preventDefault();
  if (htmlProgress < 30) {
    htmlProgress += 5;
    points += 5;
    updateUI();
  }
});

document.getElementById("css-btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (!document.getElementById("css-btn").classList.contains("locked")) {
    if (cssProgress < 50) {
      cssProgress += 5;
      points += 5;
      updateUI();
    }
  }
});

document.getElementById("js-btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (!document.getElementById("js-btn").classList.contains("locked")) {
    if (jsProgress < 60) {
      jsProgress += 5;
      points += 5;
      updateUI();
    }
  }
});

updateUI();
