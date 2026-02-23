const cssLessons = [
  {
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

let currentCssLesson = 0;
let canGoNextCss = false;
let cssPoints = 0;
let completedCssLessons = {};

function applyBackendData(data) {
  points = data.points || 0;
  document.getElementById("point").textContent = points;

  // Mark completed lessons (1 lesson = 2 points)
  completedLessons = {};
  const completedCount = Math.floor(points / 2);
  for (let i = 0; i < completedCount; i++) {
    completedLessons[i] = true;
  }

  console.log("✅ Points restored:", points);
  console.log("✅ Completed lessons restored:", completedLessons);
}

// ==========================
// PAGE LOAD
// ==========================
window.addEventListener("load", async () => {

    const username = localStorage.getItem("username");
  const email = localStorage.getItem("userEmail");
  const profilePic = localStorage.getItem("profilePic");

  // ---------- PROFILE ----------
  document.getElementById("home-username").textContent =
    username || "Username";

   const profileEl = document.getElementById("home-profile-pic");
  profileEl.src = profilePic || "/images/default.png";
  profileEl.style.width = "40px";      // Set size
  profileEl.style.height = "40px";     // Set size
  profileEl.style.borderRadius = "50%"; // Make circular
  // ---------- FETCH USER DATA ----------
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}`);
    const data = await res.json();
    
    console.log("Fetched user data:", data);
    applyBackendData(data);
  } catch (err) {
    console.error("Failed to load user data", err);
  }

  
  await loadAlert();
  await restoreCssProgress();
  loadCssLesson(currentCssLesson);
  showLessonUI();
});



const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");
const lessonList = document.getElementById("lessonList");

/* MENU ITEMS → Direct lesson mapping */
const menuItems = [
  { name: "CSS Text Color", index: 0 },
  { name: "CSS Font-Size ", index: 1 },
  { name: "CSS Font Family", index: 2 },
  { name: "CSS Font Weight", index: 3 },
  { name: "CSS Text Align", index: 4 },
  { name: "CSS Background Color", index: 5 },
  { name: "CSS Border", index: 6 },
  { name: "CSS Border Radius",  index: 7 },
  { name: "CSS Height and Width", index: 8 },
  { name: "CSS Margin", index: 9 },
  { name: "CSS Padding", index: 10 },
  { name: "CSS Display", index: 11 },
  { name: "CSS Display Inline", index: 12 },
  { name: "CSS Display Block", index: 13 },
  { name: "CSS Display None", index: 14 },


    
];

/* BUILD MENU */
/* BUILD MENU */
lessonList.innerHTML = "";

menuItems.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item.name;

  /* NORMAL MENU ITEM */
  if (!item.submenu) {
    li.addEventListener("click", () => {
      loadLesson(item.index);
      dropdownMenu.classList.remove("show");
    });
  }

  /* MENU WITH SUBMENU */
  else {
    li.classList.add("has-submenu");

    const subUl = document.createElement("ul");
    subUl.classList.add("submenu");

    item.submenu.forEach(sub => {
      const subLi = document.createElement("li");
      subLi.textContent = sub.name;

      subLi.addEventListener("click", (e) => {
        e.stopPropagation();   // prevent parent toggle
        loadLesson(sub.index);
        dropdownMenu.classList.remove("show");
      });

      subUl.appendChild(subLi);
    });

    li.appendChild(subUl);

    li.addEventListener("click", (e) => {
      e.stopPropagation();
      li.classList.toggle("submenu-open");
    });
  }

  lessonList.appendChild(li);
});

/* TOGGLE MENU */
menuIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownMenu.classList.toggle("show");
});

/* CLOSE WHEN CLICK OUTSIDE */
document.addEventListener("click", () => {
  dropdownMenu.classList.remove("show");
});

// ==========================
// RESTORE PROGRESS
// ==========================
async function restoreCssProgress() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}`);
    const data = await res.json();

    cssPoints = data.progress?.css || 0;

    completedCssLessons = {};
    const completedCount = Math.floor(cssPoints / 2);
    for (let i = 0; i < completedCount; i++) {
      completedCssLessons[i] = true;
    }

    document.getElementById("point").innerText = cssPoints;

    console.log("✅ CSS points restored:", cssPoints);
  } catch (err) {
    console.error("❌ Restore failed", err);
  }
}

// ==========================
// SHOW / HIDE LESSON & GAME
// ==========================
function showLessonUI() {
  document.getElementById("lessonSection").style.display = "block";
  document.getElementById("gameFrame").style.display = "none";
}

function showGame(gameFile) {
  document.getElementById("lessonSection").style.display = "none";
  const frame = document.getElementById("gameFrame");
  frame.style.display = "block";
  frame.src = gameFile;
}



// ==========================
// LOAD LESSON
// ==========================
function loadCssLesson(index) {
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

  canGoNextCss = !!completedCssLessons[currentCssLesson];
}

// ==========================
// RUN CODE
// ==========================
function runCssCode() {
  const editor = document.getElementById("lesson-editor");
  const iframe = document.getElementById("output");
  const code = editor.value.trim();

  if (!code) {
    showAlert();
    return;
  }

  editor.style.display = "none";
  iframe.style.display = "block";

  iframe.contentDocument.open();
  iframe.contentDocument.write(`<!DOCTYPE html><html><body>${code}</body></html>`);
  iframe.contentDocument.close();

  canGoNextCss = true;

  if (!completedCssLessons[currentCssLesson]) {
    completedCssLessons[currentCssLesson] = true;
    cssPoints += 2;
    document.getElementById("point").innerText = cssPoints;
    updateCssProgressToBackend(2);
  }

  canGoNextCss = true;

}

// ==========================
// NAVIGATION
// ==========================

function nextCssLesson() {
  if (!canGoNextCss) {
    showAlert();
    return;
  }

  // Show game after lesson 4
  if (currentCssLesson === 3) {
    showGame("/htmlgame1.html"); // adjust path
    return;
  }

  if (currentCssLesson < cssLessons.length - 1) {
    loadCssLesson(currentCssLesson + 1);
  }
}

function prevCssLesson() {
  if (currentCssLesson > 0) {
    loadCssLesson(currentCssLesson - 1);
  }
};




  


function loadAlert() {
  return fetch("alert.html")
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML("beforeend", html));
}

function showAlert() {
  document.getElementById("customAlert").style.display = "block";
  document.getElementById("alertOverlay").style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
  document.getElementById("alertOverlay").style.display = "none";
}




//final

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
        value: cssPoints
      })
    });

    console.log("✅ CSS progress saved");
  } catch (err) {
    console.error("❌ Save failed", err);
  }
}

window.addEventListener("message", function(event) {
  if (event.data === "GAME_COMPLETE") {
    cssPoints += 5;
    document.getElementById("point").innerText = cssPoints;
    updateCssProgressToBackend(5);

    alert("🎉 Game Completed! +5 Points");

    showLessonUI();
    loadCssLesson(currentCssLesson + 1);
  }
});