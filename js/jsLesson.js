const jsLessons = [
  {
    title :"JavaScript Output",
    desc :"JavaScript can display output using alerts, console messages, or by updating page content using methods like <b>innerHTML</b>.",
    top: `
    &lt;html&gt;<br>
    &lt;body&gt;<br><br>

    &lt;p id="demo"&gt;&lt;/p&gt;<br><br>

    &lt;script&gt;<br>
  `,
  middle:
    "document.getElementById(demo&quot;).innerHTML = " +
    "&quot;&lt;h2&gt;Hello World&lt;/h2&gt;&quot;;<br>",
  bottom: `
    &lt;/script&gt;<br><br>
    &lt;/body&gt;<br>
    &lt;/html&gt;
  `
  },
  {
    title :"Variables",
    desc : "Variables are used to store data. Use let when the value can change and const when the value should stay the same.",
    top :`
      &lt;html&gt;<br>
      &lt;body&gt;<br>
      &lt;script&gt;<br>
      `,
    middle :
      "let username = &quot;Alex&quot;;<br>" +
      "username = &quot;Sam&quot;;<br><br>" +
      "const country = &quot;India&quot;;<br>" +
      "console.log(username);<br>" +
      "console.log(country);",
        
    bottom : `&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;`

  },
  {
    title : "For Loop",
    desc : "Loops can execute a block of code a number of times.A for loop is used when the number of repetitions is known.",
    top :`
      &lt;html&gt;<br>
      &lt;body&gt;<br>
      &lt;script&gt;<br>
      `,
    middle : `
      <pre class="highlight-pre">
      for (let i = 1; i &lt;= 5; i++) {
      document.write(i + "&lt;br&gt;");
      }
      </pre>
      `,
      bottom : `&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;`
  },
  {
    title : "While Loop",
    desc : "While loops execute a block of code as long as a specified condition is true.Javascript have two types of while loops, <b>while loop and do while loop </b>",
    top :`
      &lt;html&gt;<br>
      &lt;body&gt;<br>
      &lt;script&gt;<br>
      `,
    middle : `
      <pre class="highlight-pre">
      while (i &lt;= 3) {
      document.write("Welcome&lt;br&gt;");
      i++;
      }
      </pre>
      `,
      bottom : `&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;`
  },
  {
    title : "DO..WHILE LOOP",
    desc : "The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.",
    top :`
      &lt;html&gt;<br>
      &lt;body&gt;<br>
      &lt;script&gt;<br>
      `,
    middle : `
      <pre class="highlight-pre">
      do {
      document.write("Learning JS&lt;br&gt;");
      i++;
    } while (i &lt;= 2);
      </pre>
      `,
      bottom : `&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;`
  },
  {
    title :"Data Types",
    desc : "JavaScript supports different data types such as strings, numbers, and booleans.",
    top :`
        &lt;html&gt;<br>
        &lt;body&gt;<br>
        &lt;script&gt;<br>
        `,
    middle :
      `let text = &quot;Hello&quot;<br>
       let number = 10;<br>
       let isActive = true;<br>
      `,
        
    bottom :  `&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;`

    },
    {
      title : "Functions",
      desc : "Functions are blocks of code that run when they are called.",
      top :`
        &lt;html&gt;<br>
        &lt;body&gt;<br>
        &lt;script&gt;<br>
        `,
      middle :`
        function greet() {
        alert(&quot;Hello!&quot;);
        "}<br>" 
        "greet();",
      `,
        
      bottom : `&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;`

    },
    {
      title : "Events",
      desc : "Events allow JavaScript to respond to user actions like clicking a button.",
      top :`
        &lt;html&gt;<br>
        &lt;body&gt;<br>
        &lt;button onclick=&quot;sayHi()&quot;&gt;Click Me&lt;/button&gt;
        &lt;script&gt;<br>
        `,
      middle :`
        "function sayHi() {
        "&nbsp;&nbsp;alert(&quot;Hi there!&quot;);
        "}",
      `,
        
      bottom :  `&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;`

    },
];

let currentJsLesson = 0;
let canGoNextJs = false;
let JsPoints = 0;
let completedJsLessons = {};

// ==========================
// PAGE LOAD (SAFE)
// ==========================
window.addEventListener("load", async () => {
  await loadAlert();
  await restoreJsProgress();
  loadJsLesson(0);
});

// ==========================
// RESTORE PROGRESS
// ==========================
async function restoreJsProgress() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}`);
    const data = await res.json();

    JsPoints = data.progress?.css || 0;

    completedJsLessons = {};
    const completedCount = Math.floor(JsPoints / 2);
    for (let i = 0; i < completedCount; i++) {
      completedJsLessons[i] = true;
    }

    document.getElementById("point").innerText = JsPoints;

    console.log("✅ Js points restored:", jsPoints);
  } catch (err) {
    console.error("❌ Restore failed", err);
  }
}

// ==========================
// LOAD LESSON
// ==========================
function loadJsLesson(index) {
  currentJsLesson = index;
  const lesson = jsLessons[index];

  document.getElementById("lesson-title").innerHTML = lesson.title;
  document.getElementById("lesson-desc").innerHTML = lesson.desc;
  document.getElementById("lesson-top").innerHTML = lesson.top;
  document.getElementById("lesson-middle").innerHTML = lesson.middle;
  document.getElementById("lesson-bottom").innerHTML = lesson.bottom;

  const editor = document.getElementById("editor");
  editor.value = "";
  editor.style.display = "block";
  document.getElementById("output").style.display = "none";

  canGoNextJs = !!completedJsLessons[currentJsLesson];
}

// ==========================
// RUN CODE
// ==========================
function runJsCode() {
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

  canGoNextJs = true;

  if (!completedJsLessons[currentJsLesson]) {
    completedJsLessons[currentJsLesson] = true;
    JsPoints += 2;
    document.getElementById("point").innerText = JsPoints;
    updateJsProgressToBackend();
  }
}

// ==========================
// NAVIGATION
// ==========================
function nextJsLesson() {
  if (!canGoNextJs) {
    showAlert();
    return;
  }
  if (currentJsLesson < jsLessons.length - 1) {
    loadJsLesson(currentJsLesson + 1);
  }
}

function prevJsLesson() {
  if (currentJsLesson > 0) {
    loadCssLesson(currentJsLesson - 1);
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

    console.log("✅ js progress saved");
  } catch (err) {
    console.error("❌ Save failed", err);
  }
}