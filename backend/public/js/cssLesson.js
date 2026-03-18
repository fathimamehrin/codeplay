const cssLessons = [
  {
    id: "css-text-color",
    title: "CSS Text Color",
    desc: "The color property is used to change the text color.",
    top: `
&lt;html&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;h3 <span class="highlight">style="color: blue;"</span>&gt;Hello World&lt;/h3&gt;
&lt;p <span class="highlight">style="color: red;"</span>&gt;This text is red&lt;/p&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-font-size",
    title: "CSS Font-Size",
    desc: "The font-size property is used to change the size of the text.",
    top: `
&lt;html&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;p <span class="highlight">style="font-size: 24px; color: red;"</span>&gt;
This text is bigger
&lt;/p&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-font-family",
    title: "CSS Font Family",
    desc: "The font-family property is used to change the font style.",
    top: `
&lt;html&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;p <span class="highlight">style="font-family: Arial; color: red;"</span>&gt;
This text uses Arial font
&lt;/p&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-font-weight",
    title: "CSS Font Weight",
    desc: "The font-weight property is used to make text bold.",
    top: `
&lt;html&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;p <span class="highlight">style="font-weight: bold;"</span>&gt;
This text is bold
&lt;/p&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-text-align",
    title: "CSS Text Align",
    desc: "The text-align property is used to align text.",
    top: `
&lt;html&gt;<br>
&lt;head&gt;<br>
<pre class="highlight-pre">
&lt;style&gt;
p {
  <span class="highlight">text-align: center;</span>
}
&lt;/style&gt;
</pre>
&lt;/head&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;h2&gt;Centering Text&lt;/h2&gt;
&lt;p&gt;This text is centered.&lt;/p&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-background-color",
    title: "CSS Background Color",
    desc: "The background-color property is used to set the background color.",
    top: `
&lt;html&gt;<br>
&lt;head&gt;<br>
<pre class="highlight-pre">
&lt;style&gt;
p {
  <span class="highlight">background-color: blue;</span>
}
&lt;/style&gt;
</pre>
&lt;/head&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;p&gt;This text has a blue background.&lt;/p&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-border",
    title: "CSS Border",
    desc: "The border property is used to set the border style, width, and color.",
    top: `
&lt;html&gt;<br>
&lt;head&gt;<br>
<pre class="highlight-pre">
&lt;style&gt;
p {
  <span class="highlight">border: 2px solid black;</span>
}
&lt;/style&gt;
</pre>
&lt;/head&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;p&gt;This text has a border.&lt;/p&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-border-radius",
    title: "CSS Border Radius",
    desc: "The border-radius property is used to create rounded corners.",
    top: `
&lt;html&gt;<br>
&lt;head&gt;<br>
<pre class="highlight-pre">
&lt;style&gt;
p.normal {
  border: 2px solid red;
}
p.round {
  <span class="highlight">border-radius: 8px;</span>
  border: 2px solid red;
}
&lt;/style&gt;
</pre>
&lt;/head&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;p class="normal"&gt;Normal border&lt;/p&gt;
&lt;p class="round"&gt;Rounded border&lt;/p&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-height-width",
    title: "CSS Height and Width",
    desc: "The height and width properties are used to set the size of an element.",
    top: `
&lt;html&gt;<br>
&lt;head&gt;<br>
<pre class="highlight-pre">
&lt;style&gt;
div {
  <span class="highlight">height: 200px;
  width: 50%;</span>
  background-color: powderblue;
}
&lt;/style&gt;
</pre>
&lt;/head&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;div&gt;This div has a height of 200px and width of 50%.&lt;/div&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-margin",
    title: "CSS Margin",
    desc: "Margins create space outside an element.",
    top: `
&lt;html&gt;<br>
&lt;head&gt;<br>
<pre class="highlight-pre">
&lt;style&gt;
div {
  <span class="highlight">margin: 70px;</span>
  border: 1px solid green;
}
&lt;/style&gt;
</pre>
&lt;/head&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;div&gt;This element has a margin of 70px.&lt;/div&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-padding",
    title: "CSS Padding",
    desc: "Padding creates space inside an element.",
    top: `
&lt;html&gt;<br>
&lt;head&gt;<br>
<pre class="highlight-pre">
&lt;style&gt;
div {
  <span class="highlight">padding: 40px;</span>
  border: 1px solid black;
}
&lt;/style&gt;
</pre>
&lt;/head&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;div&gt;This element has padding inside the border.&lt;/div&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-display",
    title: "CSS Display",
    desc: "The display property controls how an element is shown.",
    top: `
&lt;html&gt;<br>
&lt;head&gt;<br>
<pre class="highlight-pre">
&lt;style&gt;
.block { <span class="highlight">display: block;</span> }
.inline { <span class="highlight">display: inline;</span> }
.none { <span class="highlight">display: none;</span> }
&lt;/style&gt;
</pre>
&lt;/head&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;div class="block"&gt;Block element&lt;/div&gt;
&lt;div class="inline"&gt;Inline element&lt;/div&gt;
&lt;div class="none"&gt;Hidden element&lt;/div&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;<br>
`
  },
  {
    id: "css-display-inline",
    title: "CSS Display: Inline",
    desc: "Using display: inline on list items makes them appear in a single horizontal line instead of stacking vertically.",
    top: `
&lt;html&gt;<br>
&lt;head&gt;<br>
&lt;style&gt;<br>
ul {<br>
&nbsp;&nbsp;list-style-type: none;<br>
&nbsp;&nbsp;margin: 0;<br>
&nbsp;&nbsp;padding: 0;<br>
}<br><br>
li {<br>
&nbsp;&nbsp;<span class="highlight">display: inline;</span><br>
}<br>
&lt;/style&gt;<br>
&lt;/head&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;p&gt;Display a list as a horizontal menu:&lt;/p&gt;

&lt;ul&gt;
  &lt;li&gt;&lt;a href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;News&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;Contact&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;
`
  },
  {
    id: "css-display-links-block",
    title: "CSS Display: Links as Block",
    desc: "By default, links (a elements) are inline. Using display: block makes each link appear on a new line.",
    top: `
&lt;html&gt;<br>
&lt;head&gt;<br>
&lt;style&gt;<br>
a {<br>
&nbsp;&nbsp;<span class="highlight">display: block;</span><br>
}<br>
&lt;/style&gt;<br>
&lt;/head&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;h1&gt;Display links as block elements&lt;/h1&gt;

&lt;a href="#"&gt;HTML&lt;/a&gt;
&lt;a href="#"&gt;CSS&lt;/a&gt;
&lt;a href="#"&gt;JavaScript&lt;/a&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;
`
  },
  {
    id: "css-display-none",
    title: "CSS Display: none",
    desc: "The display: none value completely hides an element. The hidden element is removed from the layout and no space is kept.",
    top: `
&lt;html&gt;<br>
&lt;head&gt;<br>
&lt;style&gt;<br>
.hide {<br>
&nbsp;&nbsp;<span class="highlight">display: none;</span><br>
}<br>
&lt;/style&gt;<br>
&lt;/head&gt;<br>
&lt;body&gt;<br>
`,
    middle: `
<pre class="highlight-pre">
&lt;h1&gt;display: none Example&lt;/h1&gt;

&lt;p&gt;This paragraph is visible.&lt;/p&gt;
&lt;p <span class="highlight">class="hide"</span>&gt;You cannot see this paragraph.&lt;/p&gt;
&lt;p&gt;The hidden paragraph does not take any space.&lt;/p&gt;
</pre>
`,
    bottom: `
&lt;/body&gt;<br>
&lt;/html&gt;
`
  }
];

const cssValidation = {
  "css-text-color": ["color"],
  "css-font-size": ["font-size"],
  "css-font-family": ["font-family"],
  "css-font-weight": ["font-weight"],
  "css-text-align": ["text-align"],
  "css-background-color": ["background-color"],
  "css-border": ["border"],
  "css-border-radius": ["border-radius"],
  "css-height-width": ["height", "width"],
  "css-margin": ["margin"],
  "css-padding": ["padding"],
  "css-display": ["display"],
  "css-display-inline": ["display", "inline"],
  "css-display-links-block": ["display", "block"],
  "css-display-none": ["display", "none"]
};



// SAVE LAST VISITED PAGE
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
// ==========================
// GLOBAL VARIABLES
// ==========================
let currentCssLesson = 0;
let canGoNextCss = false;
let cssPoints = 0;
let completedCssLessons = {};
let currentGameIndex = 0;

completedCssLessons =
  JSON.parse(localStorage.getItem("completedCssLessons")) || {};

const lessonGames = {
  5: "/cssgame1.html",
  14: "/cssgame2.html"
};

function updatePointsDisplay() {

  const pointsEl = document.getElementById("points-count");

  if (pointsEl) {
    pointsEl.innerText = cssPoints.toString().padStart(2, "0");
  }

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
// PAGE LOAD
// ==========================
window.onload = async () => {

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("userEmail");
  const profilePic = localStorage.getItem("profilePic");

  document.getElementById("home-username").textContent =
    username || "Username";

  const profileEl = document.getElementById("home-profile-pic");
  profileEl.src = profilePic || "/images/default.png";
  profileEl.style.width = "35px";
  profileEl.style.height = "35px";
  profileEl.style.borderRadius = "50%";

  if (!email) return;

  await loadAlert();
  await restoreCssProgressFromBackend();

    // ==========================
  // GAME REWARD CHECK ✅
  // ==========================
  const gameResult = localStorage.getItem("cssGameResult");
const gameRewarded = localStorage.getItem("cssGameRewarded");

if (gameResult === "complete" && !gameRewarded) {

    cssPoints += 5;
    updatePointsDisplay();

    await fetch("/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        subject: "css",
        value: 5
      })
    });

    localStorage.setItem("cssGameRewarded", "true");

  await restoreCssProgressFromBackend();

  localStorage.removeItem("cssGameResult");

  console.log("🎉 Game reward applied");
  }

  const params = new URLSearchParams(window.location.search);
const lessonFromUrl = params.get("cssLesson");

if (lessonFromUrl !== null) {
  currentCssLesson = Number(lessonFromUrl);
}

  loadCssLesson(currentCssLesson);
};

// ==========================
// RESTORE PROGRESS
// ==========================
async function restoreCssProgressFromBackend() {

  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}&subject=css`);
    const data = await res.json();

    cssPoints = data.points || 0;

    updatePointsDisplay();

  } catch (err) {
    console.error("❌ Restore failed", err);
  }
}


// ==========================
// LOAD LESSON
// ==========================
function loadCssLesson(index) {

  if (!cssLessons[index]) return;

  currentCssLesson = index;

  const lesson = cssLessons[index];

  document.getElementById("lesson-title").innerHTML = lesson.title;
  document.getElementById("lesson-desc").innerHTML = lesson.desc;
  document.getElementById("lesson-top").innerHTML = lesson.top;
  document.getElementById("lesson-middle").innerHTML = lesson.middle;
  document.getElementById("lesson-bottom").innerHTML = lesson.bottom;

  const editor = document.getElementById("lesson-editor");
  editor.value = "";
  editor.style.display = "block";
  document.getElementById("output").style.display = "none";

  canGoNextCss = !!completedCssLessons[index];
}
// ==========================
// CSS VALIDATION FUNCTION
// ==========================
function validateCSSAnswer(userCode, lessonId) {
  const rules = cssValidation[lessonId];
  if (!rules) return false; // fail if no rules defined

  // Normalize code: lowercase + remove all spaces around :, ;
  const normalizedCode = userCode
    .toLowerCase()
    .replace(/\s*:\s*/g, ":")   // remove spaces around colon
    .replace(/\s*;\s*/g, ";")   // remove spaces around semicolon
    .replace(/\s+/g, " ");      // normalize other whitespace

  return rules.every(rule => {
    // also normalize rule to match the colon removal
    return normalizedCode.includes(rule.replace(/\s+/g, "").toLowerCase());
  });
}


// ==========================
// RUN CODE
// ==========================
async function runCssCode() {

  const editor = document.getElementById("lesson-editor");
  const iframe = document.getElementById("output");
  const code = editor.value.trim();

  if (code === "") {
    showAlert("please write some code first");
    return;
  }

   // ✅ VALIDATION 
  const isValid = validateCSSAnswer(code, currentCssLesson);

  if (!isValid) {
    showAlert("❌ Your code does not match the lesson requirements. Check syntax or missing elements.");
    return;
  }

  editor.style.display = "none";
  iframe.style.display = "block";

  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(code);
  doc.close();

  canGoNextCss = true;

  if (!completedCssLessons[currentCssLesson]) {

  completedCssLessons[currentCssLesson] = true;

  cssPoints += 2;
  updatePointsDisplay();

  let progress = parseInt(localStorage.getItem("cssLessonProgress")) || 0;

  // prevent duplicate counting
  let cssProgressKey = "css_" + currentCssLesson;

  if (!localStorage.getItem(cssProgressKey)) {
    progress++;
    localStorage.setItem("cssLessonProgress", progress);
    localStorage.setItem(cssProgressKey, "true");
  }

  localStorage.setItem(
    "completedCssLessons",
    JSON.stringify(completedCssLessons)
  );

  await updateCssProgressToBackend();
}
}


// ========================
// NEXT BUTTON
// ==========================
function nextCssLesson() {

  if (!canGoNextCss) {
    showAlert();
    return;
  }

  // If this lesson has a game
  if (lessonGames[currentCssLesson]) {

    const gameDone = localStorage.getItem("cssGameResult");

    if (gameDone !== "complete") {

      localStorage.removeItem("cssGameRewarded");
      // go to game
      window.location.href =
        `${lessonGames[currentCssLesson]}?cssLesson=${currentCssLesson}`;

      return;
    }

    // remove after completion
    localStorage.removeItem("cssGameResult");
  }

  // Go to next lesson
  if (currentCssLesson < cssLessons.length - 1) {
    currentCssLesson++;            // ⭐ ADD THIS LINE
    loadCssLesson(currentCssLesson); 
  }
}

  
// ==========================
// PREV BUTTON
// ==========================
function prevCssLesson() {
  if (currentCssLesson > 0) {
     window.location.href = `cssLesson.html?cssLesson=${currentCssLesson - 1}`;
     } else {

    window.location.href = "cssIntro.html";

  }
  }


function loadAlert() {
  return fetch("alert.html")
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML("beforeend", html));
}
// ==========================
// ALERT
// ==========================
function showAlert(message = "Something went wrong!") {
  document.getElementById("customAlert").style.display = "block";
  document.getElementById("alertOverlay").style.display = "block";

  const msg = document.getElementById("alertMessage");
  if (msg) {
    msg.innerText = message;
  }


}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
  document.getElementById("alertOverlay").style.display = "none";
}


// ==========================
// SAVE PROGRESS
// ==========================
async function updateCssProgressToBackend() {

  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    await fetch("/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        subject: "css",
        value: 2
      })
    });

  } catch (err) {
    console.error("❌ Save failed", err);
  }
}