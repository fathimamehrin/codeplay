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
    title: "CSS Font Size",
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
  }

];

let currentCssLesson = 0;
let canGoNextCss = false;
let cssPoints = 0;
let completedCssLessons = {};

// ==========================
// PAGE LOAD (SAFE)
// ==========================
window.addEventListener("load", async () => {
  await loadAlert();
  await restoreCssProgress();
  loadCssLesson(0);
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

  const editor = document.getElementById("editor");
  editor.value = "";
  editor.style.display = "block";
  document.getElementById("output").style.display = "none";

  canGoNextCss = !!completedCssLessons[currentCssLesson];
}

// ==========================
// RUN CODE
// ==========================
function runCssCode() {
  const editor = document.getElementById("editor");
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
    updateCssProgressToBackend();
  }
}

// ==========================
// NAVIGATION
// ==========================
function nextCssLesson() {
  if (!canGoNextCss) {
    showAlert();
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
}

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

// ==========================
// BACKEND UPDATE
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

    console.log("✅ CSS progress saved");
  } catch (err) {
    console.error("❌ Save failed", err);
  }
}