const lessons = [
{
id:"html-headings",
title: "&lt;h1&gt; to &lt;h6&gt;",
desc: "Displays headings. &lt;h1&gt; is the biggest, &lt;h6&gt; is the smallest.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
      <pre class="highlight-pre">
      &lt;h1&gt;Try Me!&lt;/h1&gt;
      &lt;h2&gt;Try Me!&lt;/h2&gt;
      &lt;h3&gt;Try Me!&lt;/h3&gt;
      &lt;h4&gt;Try Me!&lt;/h4&gt;
      &lt;h5&gt;Try Me!&lt;/h5&gt;
      &lt;h6&gt;Try Me!&lt;/h6&gt;
        </pre>
      `,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;",
validate: (code) => /<h[1-6]>.*<\/h[1-6]>/i.test(code)
},

{
id:"html-p-tag",
title: "&lt;p&gt; tag",
desc: "The &lt;p&gt; tag is used to define a paragraph in HTML "+
      "It is commonly used for normal text content.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: "&lt;p&gt;Hello World&lt;/p&gt;",
bottom: "&lt;/body&gt;<br>&lt;/html&gt;",
validate: (code) => /<p>.*<\/p>/i.test(code)
},

{
id:"html-br-tag",
title: "&lt;br&gt; tag",
desc: "The &lt;br&gt; tag is used to insert a line break. ",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: "&lt;p&gt;Hello <span class='highlight'>&lt;br&gt; Welcome to HTML</span>&lt;/p&gt;",
bottom: "&lt;/body&gt;<br>&lt;/html&gt;",
validate: (code) => /<br\s*\/?>/i.test(code)
},

{
id:"html-a-tag",
title: "&lt;a&gt; tag",
desc: "Used to create links.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: "&lt;a href='https://example.com'&gt;Visit&lt;/a&gt;",
bottom: "&lt;/body&gt;<br>&lt;/html&gt;",
validate: (code) => /<a\s+href=.*?>.*<\/a>/i.test(code)
},

{
id:"html-formatting-elements",
title: "Formatting Elements",
desc: "Formmatting elements are used to channge the appearence or style of text in an HTML page",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
      <pre class="highlight-pre">
      &lt;p&gt;<span class="highlight">&lt;b&gt;This text is bold.&lt;/b&gt;</span>&lt;/p&gt;
      &lt;p&gt;<span class="highlight">&lt;strong&gt;This text is important.&lt;/strong&gt;</span>&lt;/p&gt;
      &lt;p&gt;<span class="highlight">&lt;i&gt;This text is italic.&lt;/i&gt;</span>&lt;/p&gt;
      &lt;p&gt;<span class="highlight">&lt;em&gt;This text is emphasized.&lt;/em&gt;</span>&lt;/p&gt;
      &lt;p&gt;<span class="highlight">&lt;u&gt;This text is underlined.&lt;/u&gt;</span>&lt;/p&gt;
      &lt;p&gt;<span class="highlight">&lt;small&gt;This is smaller text.&lt;/small&gt;</span>&lt;/p&gt;
      &lt;p&gt;This is <span class="highlight">&lt;sub&gt;subscript&lt;/sub&gt;</span> text.&lt;/p&gt;
      &lt;p&gt;This is <span class="highlight">&lt;sup&gt;superscript&lt;/sup&gt;</span> text.&lt;/p&gt;
      </pre>
      `,    
bottom: "&lt;/body&gt;<br>&lt;/html&gt;",
validate: (code) => /<(b|strong|i|em|u|small|sub|sup)>/i.test(code)
},

{
id:"html-bold",
title: "Bold Text",
desc: "The <b> tag is used to make text bold without adding any extra importance.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
      <pre class="highlight-pre">
      &lt;p&gt;<span class="highlight">&lt;b&gt;This text is bold.&lt;/b&gt;</span>&lt;/p&gt;
      </pre>
    `,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;",
validate: (code) => /<b>.*<\/b>/i.test(code)
},

{
id:"html-strong",
title: "Strong Text",
desc: "The <strong> tag is used to define important text. It appears bold by default.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
      <pre class="highlight-pre">
      &lt;p&gt;<span class="highlight">&lt;strong&gt;This text is important.&lt;/strong&gt;</span>&lt;/p&gt;
      </pre>
    `,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;",
validate: (code) => /<strong>.*<\/strong>/i.test(code)
},

{
id:"html-italic",
title: "Italic Text",
desc: "The <i> tag is used to display text in italic style.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
      <pre class="highlight-pre">
      &lt;p&gt;<span class="highlight">&lt;i&gt;This text is italic.&lt;/i&gt;</span>&lt;/p&gt;
      </pre>
    `,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;",
validate: (code) => /<i>.*<\/i>/i.test(code)
},

{
id:"html-em",
title: "Emphasized Text",
desc: "The <em> tag is used to emphasize text. It usually appears in italic.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
      <pre class="highlight-pre">
      &lt;p&gt;<span class="highlight">&lt;em&gt;This text is emphasized.&lt;/em&gt;</span>&lt;/p&gt;
      </pre>
    `,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;",
validate: (code) => /<em>.*<\/em>/i.test(code)
},

{
id:"html-underline",
title: "Underlined Text",
desc: "The <u> tag is used to underline text.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
      <pre class="highlight-pre">
      &lt;p&gt;<span class="highlight">&lt;u&gt;This text is underlined.&lt;/u&gt;</span>&lt;/p&gt;
      </pre>
    `,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;",
validate: (code) => /<u>.*<\/u>/i.test(code)
},

{
id:"html-small",
title: "Small Text",
desc: "The <small> tag is used to display smaller text.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
      <pre class="highlight-pre">
      &lt;p&gt;<span class="highlight">&lt;small&gt;This is smaller text.&lt;/small&gt;</span>&lt;/p&gt;
      </pre>
    `,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;",
validate: (code) => /<small>.*<\/small>/i.test(code)
},

{
id:"html-subscript",
title: "Subscript Text",
desc: "The <sub> tag is used to display subscript text.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
      <pre class="highlight-pre">
      &lt;p&gt;This is <span class="highlight">&lt;sub&gt;subscript&lt;/sub&gt;</span> text.&lt;/p&gt;
      </pre>
    `,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
},

{
id:"html-superscript",
title: "Superscript Text",
desc: "The <sup> tag is used to display superscript text.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
      <pre class="highlight-pre">
      &lt;p&gt;This is <span class="highlight">&lt;sup&gt;superscript&lt;/sup&gt;</span> text.&lt;/p&gt;
      </pre>
    `,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
},
  {
id:"html-img",
title: "&lt;img&gt; tag",
desc: "The &lt;img&gt; tag is used to display images on a webpage.It requires the src attribute to  specify the image location",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle:
  "&lt;h2&gt;HTML Image&lt;/h2&gt;<br>" +
  "<span class='highlight'>" +
  "&lt;img src='pic_trulli.jpg' alt='Trulli'<br>" +
  " width='500' height='333'&gt;" +
  "</span>",
bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
},

{
id:"html-table",
title: "table",
desc: "Used to create tables in HTML.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
<pre class="highlight-pre">
&lt;style&gt;
table, th, td {
  border: 1px solid black;
}
&lt;/style&gt;

&lt;body&gt;

&lt;h2&gt;A basic HTML table&lt;/h2&gt;

&lt;table style="width:100%"&gt;
  &lt;tr&gt;
    &lt;th&gt;Company&lt;/th&gt;
    &lt;th&gt;Contact&lt;/th&gt;
    &lt;th&gt;Country&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Alfreds Futterkiste&lt;/td&gt;
    &lt;td&gt;Maria Anders&lt;/td&gt;
    &lt;td&gt;Germany&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Centro comercial Moctezuma&lt;/td&gt;
    &lt;td&gt;Francisco Chang&lt;/td&gt;
    &lt;td&gt;Mexico&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;

&lt;p&gt;To understand the example better, we have added borders to the table.&lt;/p&gt;
</pre>
`,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
},

{
id:"html-lists",
title: "HTML Lists",
desc: "Example of unordered and ordered lists.",
top: `&lt;html&gt;<br>&lt;body&gt;<br>`,
middle: `
<pre class="highlight-pre">
&lt;h2&gt;An Unordered HTML List&lt;/h2&gt;
<span class="highlight">&lt;ul&gt;</span>
  <span class="highlight">&lt;li&gt;</span>Coffee<span class="highlight">&lt;/li&gt;</span>
  <span class="highlight">&lt;li&gt;</span>Tea<span class="highlight">&lt;/li&gt;</span>
  <span class="highlight">&lt;li&gt;</span>Milk<span class="highlight">&lt;/li&gt;</span>
<span class="highlight">&lt;/ul&gt;</span>

&lt;h2&gt;An Ordered HTML List&lt;/h2&gt;
<span class="highlight">&lt;ol&gt;</span>
  <span class="highlight">&lt;li&gt;</span>Coffee<span class="highlight">&lt;/li&gt;</span>
  <span class="highlight">&lt;li&gt;</span>Tea<span class="highlight">&lt;/li&gt;</span>
  <span class="highlight">&lt;li&gt;</span>Milk<span class="highlight">&lt;/li&gt;</span>
<span class="highlight">&lt;/ol&gt;</span>
</pre>
`,
bottom: `&lt;/body&gt;<br>&lt;/html&gt;`
},

{
id:"html-unordered-list",
title: "Unordered List",
desc: "The &lt;ol&gt; tag is Used to create a list of items with bullet points (no numbers).r.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
<pre class="highlight-pre">
&lt;h2&gt;An Unordered HTML List&lt;/h2&gt;

<span class="highlight">&lt;ul&gt;</span>
<span class="highlight">&lt;li&gt;</span>Coffee<span class="highlight">&lt;/li&gt;</span>
<span class="highlight">&lt;li&gt;</span>Tea<span class="highlight">&lt;/li&gt;</span>
<span class="highlight">&lt;li&gt;</span>Milk<span class="highlight">&lt;/li&gt;</span>
<span class="highlight">&lt;/ul&gt;</span>
</pre>
`,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
},

{
id:"html-ordered-list",
title: "Ordered List",
desc: "The &lt;ol&gt; tag is used to create a list of items in order.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
<pre class="highlight-pre">
&lt;h2&gt;An Ordered HTML List&lt;/h2&gt;

<span class="highlight">&lt;ol&gt;</span>
<span class="highlight">&lt;li&gt;</span>Coffee<span class="highlight">&lt;/li&gt;</span>
<span class="highlight">&lt;li&gt;</span>Tea<span class="highlight">&lt;/li&gt;</span>
<span class="highlight">&lt;li&gt;</span>Milk<span class="highlight">&lt;/li&gt;</span>
<span class="highlight">&lt;/ol&gt;</span>
</pre>
`,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
},

{
id:"html-description-list",
title: "Description List",
desc: "The &lt;dl&gt; tag is used to show a term and its explanation.",
top: "&lt;html&gt;<br>&lt;body&gt;<br>",
middle: `
<pre class="highlight-pre">
&lt;h2&gt;A Description HTML List&lt;/h2&gt;
<span class="highlight">&lt;dl&gt;</span> 
<span class="highlight">&lt;dt&gt;</span>HTML<span class="highlight">&lt;/dt&gt;</span>
<span class="highlight">&lt;dd&gt;</span>used to give structure to web pages.<span class="highlight">&lt;/dd&gt;</span>

<span class="highlight">&lt;dt&gt;</span>CSS<span class="highlight">&lt;/dt&gt;</span>
<span class="highlight">&lt;dd&gt;</span>used to style web pages.<span class="highlight">&lt;/dd&gt;</span>

<span class="highlight">&lt;dt&gt;</span>JAVASCRIPT<span class="highlight">&lt;/dt&gt;</span>
<span class="highlight">&lt;dd&gt;</span>used to make web pages interactive.<span class="highlight">&lt;/dd&gt;</span>
<span class="highlight">&lt;/dl&gt;</span>
</pre>
`,
bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
},

{
id:"html-div",
title: "&lt;div&gt; tag",
desc: "Used to group multiple HTML elements into one block.",
top: `
&lt;html&gt;<br>
&lt;style&gt;<br>
<span class="highlight">
div { <br>
background-color:#FFF4A3 ; <br>
}<br>
</span>
&lt;/style&gt;<br>
&lt;body&gt;<br>
`,
middle: `
&lt;h2&gt;HTML DIV Example&lt;/h2&gt;<br>
<span class="highlight">
&lt;div&gt; <br>
&lt;p&gt;Multiple elements are wrapped inside this div.&lt;/p&gt; <br>
&lt;p&gt;The div separates this block from other content.&lt;/p&gt;<br>
&lt;/div&gt;
</span>
`,
bottom: `&lt;/body&gt;<br>&lt;/html&gt;<br>`
},

{
id:"html-class",
title: "HTML Class Example",
desc: "Using a class selector to style a div.",
top: `
&lt;html&gt;<br>
&lt;style&gt;<br>
<span class="highlight">
.city{
background-color:yellow;
color:red;
border:2px solid black;
}
</span>
&lt;/style&gt;<br>
&lt;body&gt;<br>
`,
middle: `
<span class="highlight">
&lt;div class="city"&gt;<br>
&lt;h2&gt;London&lt;/h2&gt;<br>
&lt;p&gt;London is the capital of England&lt;/p&gt;<br>
&lt;/div&gt;
</span>
`,
bottom: `&lt;/body&gt;<br>&lt;/html&gt;`
},

{
id:"html-id",
title: "HTML id Attribute",
desc: "The id attribute specifies a unique id for an HTML element. It is styled using # followed by the id name.",
top: `
&lt;html&gt;<br>
&lt;style&gt;<br>
<span class="highlight">
#myHeader {
background-color: lightblue;
color: black;
}
</span>
.city {
background-color: yellow;
color: red;
}
&lt;/style&gt;<br>
&lt;body&gt;<br>
`,
middle: `
<span class="highlight">
&lt;h1 id="myHeader"&gt;My Cities&lt;/h1&gt;<br>
</span>
&lt;h2 class="city"&gt;London&lt;/h2&gt;<br>
&lt;p class="city"&gt;London is the capital of England&lt;/p&gt;<br>
`,
bottom: `&lt;/body&gt;<br>&lt;/html&gt;`
},

{
id:"html-button",
title: "HTML Buttons",
desc: "The &lt;button&gt; tag is used to create a clickable button on a webpage.",
top:`&lt;html&gt;<br>&lt;body&gt;<br>`,
middle:`
&lt;h1&gt;HTML Buttons&lt;/h1&gt;<br>
&lt;p&gt;This is a basic HTML button.&lt;/p&gt;<br>
<span class="highlight">
&lt;button&gt;Click Me&lt;/button&gt;
</span>
`,
bottom:`&lt;/body&gt;<br>&lt;/html&gt;`
},

{
id:"html-forms",
title: "HTML Forms",
desc: "The &lt;form&gt; element is used to create an HTML form.",
top:`&lt;html&gt;<br>&lt;body&gt;<br>`,
middle:`...`,
bottom:`&lt;/body&gt;<br>&lt;/html&gt;`
},

{
id:"html-form-tag",
title: "&lt;form&gt; tag",
desc: "Used to collect user input using input fields like text and password.",
top:"&lt;html&gt;<br>&lt;body&gt;<br>",
middle:`...`,
bottom:"&lt;/body&gt;<br>&lt;/html&gt;"
},

{
id:"html-text-fields",
title:"Text Fields",
desc:"input type text",
top:`&lt;html&gt;<br>&lt;body&gt;<br>`,
middle:`...`,
bottom:`&lt;/body&gt;<br>&lt;/html&gt;`
},

{
id:"html-radio-buttons",
title:"Radio Buttons",
desc:"Radio buttons allow users to select only one option",
top:`&lt;html&gt;<br>&lt;body&gt;<br>`,
middle:`...`,
bottom:`&lt;/body&gt;<br>&lt;/html&gt;`
},

{
id:"html-checkboxes",
title:"Checkboxes",
desc:"Checkboxes allow selecting multiple options",
top:`&lt;html&gt;<br>&lt;body&gt;<br>`,
middle:`...`,
bottom:`&lt;/body&gt;<br>&lt;/html&gt;`
}
];

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

let currentLesson = 0;
let canGoNext = false;
let Points = 0;
let completedLessons = {};
let currentGameIndex = 0;

completedLessons =
  JSON.parse(localStorage.getItem("completedLessons")) || {};


const games = [
  "/htmlgame1.html",
  "/htmlgame2.html",
  "/htmlgame3.html"
];

// ==========================
// DOM
// ==========================
const menuIcon = document.getElementById("menuIcon");
const dropdownMenu = document.getElementById("dropdownMenu");
const lessonList = document.getElementById("lessonList");
const gameContainer = document.getElementById("gameContainer");

// ==========================
// PAGE LOAD
// ==========================
window.onload = async () => {

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("userEmail");
  const profilePic = localStorage.getItem("profilePic");

  // ---------- PROFILE ----------
  document.getElementById("home-username").textContent =
    username || "Username";

  const profileEl = document.getElementById("home-profile-pic");
  profileEl.src = profilePic || "/images/default.png";
  profileEl.style.width = "35px";
  profileEl.style.height = "35px";
  profileEl.style.borderRadius = "50%";

  if (!email) return;

   loadAlert();

   const savedLessons = localStorage.getItem("completedLessons");
if (savedLessons) {
  completedLessons = JSON.parse(savedLessons);
}
  await restoreProgressFromBackend();

  // ==========================
  // GAME REWARD CHECK ✅
  // ==========================
  const gameResult = localStorage.getItem("htmlGameResult");

  if (gameResult === "complete") {

    points += 5;
    document.getElementById("point").innerText = points;

    await fetch("/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        subject: "html",
        value: 5
      })
    });

    
    localStorage.removeItem("htmlGameResult");

    console.log("🎉 Game reward applied");
  }

  const params = new URLSearchParams(window.location.search);
  const lessonFromUrl = params.get("lesson");

if (lessonFromUrl !== null) {
  currentLesson = Number(lessonFromUrl);
}

  loadLesson(currentLesson);
};

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

// ====================== LOG OUT ====================== //
document.getElementById("removeAccount").addEventListener("click", e => {
  e.preventDefault();

  if (!confirm("Are you sure you want to log out?")) return;

  localStorage.clear();
  window.location.href = "about.html";
});

// ==========================
// RESTORE PROGRESS
// ==========================
async function restoreProgressFromBackend() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}&subject=html`);
    const data = await res.json();

    points = data.points  || 0;

    document.getElementById("point").innerText = points;

   

  } catch (err) {
    console.error("❌ Failed to restore progress", err);
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

  canGoNext = !!completedLessons[index] ;
}

// ==========================
// RUN CODE
// ==========================
function runCode() {
  const editor = document.getElementById("editor");
  const iframe = document.getElementById("output");
  const code = editor.value.trim();

  const lesson = lessons[currentLesson];

// Basic empty check
if (code === "") {
  showAlert("⚠️ Please write some code first!");
  return;
}

// Lesson-specific validation
if (lesson.validate && !lesson.validate(code)) {
  showAlert("❌ Your code is not correct for this lesson. Try again!");
  return;
}

  editor.style.display = "none";
  iframe.style.display = "block";

  iframe.contentDocument.open();
  iframe.contentDocument.write(
    `<!DOCTYPE html><html><body>${code}</body></html>`
  );
  iframe.contentDocument.close();

  canGoNext = true;

  if (!completedLessons[currentLesson]) {
     if (lesson.validate && lesson.validate(code)) {

    completedLessons[currentLesson] = true;

    points += 2;
    document.getElementById("point").innerText = points;

    
    let progress = parseInt(localStorage.getItem("lessonProgress")) || 0;

// Map lesson index to graph step
let stepNumber = currentLesson + 3; // ⭐ VERY IMPORTANT

if (stepNumber > progress) {
  localStorage.setItem("lessonProgress", stepNumber);
}
     }
    localStorage.setItem(
      "completedLessons",
      JSON.stringify(completedLessons)
    );

    const email = localStorage.getItem("userEmail");

    if (email) {
      fetch("/update-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: "html",
          value: 2,
          completedLessons: { [currentLesson]: true }
        })
      })
      .then(res => res.json())
      .then(data => console.log("✅ Lesson progress synced", data))
      .catch(err => console.error("❌ Failed to sync", err));
    }
  }  
}
// ==========================
// NAVIGATION
// ==========================
function nextLesson() {

  if (!canGoNext) {
    showAlert("please the write the example and click run  before moving to the next lesson");
    return;
  }

  // 🎮 GAME CONDITIONS
  if (currentLesson === 12) {
    window.location.href = `${games[0]}?from=12`;
    return;
  }

  if (currentLesson === 14) {
    window.location.href = `${games[1]}?from=14`;
    return;
  }

  if (currentLesson === 27) {
    window.location.href = `${games[2]}?from=27`;
    return;
  }

  // 👉 move to next lesson
  if (currentLesson < lessons.length - 1) {
    currentLesson++;            // ⭐ ADD THIS LINE
    loadLesson(currentLesson);  // load next lesson
  }
}

function prevLesson() {
  if (currentLesson > 0) {
    loadLesson(currentLesson - 1);
  } else {
    // If on the first lesson, go back to htmlintro.html
    window.location.href = "/htmlintro.html";
  }
}
  


// ==========================
// ALERT
// ==========================
function loadAlert() {
  return fetch("alert.html")
    .then(res => res.text())
    .then(html => document.body.insertAdjacentHTML("beforeend", html));
}

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
// BACKEND UPDATE
// ==========================
async function updateProgressToBackend() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    await fetch("/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        subject: "html",
        value: 2,
        completedLessons: { [currentLesson]: true }
      })
    });

  } catch (err) {
    console.error("❌ Failed to save progress", err);
  }
}




