const lessons = [
  {
    title: "&lt;h1&gt; to &lt;h6&gt;",
    desc: "Displays headings. &lt;h1&gt; is the biggest, &lt;h6&gt; is the smallest.",
    top: "&lt;html&gt;<br>&lt;body&gt;<br>",
    middle: "&lt;h1&gt;Try Me!&lt;/h1&gt;<br>&lt;h2&gt;Try Me!&lt;/h2&gt;<br>&lt;h3&gt;Try Me!&lt;/h3&gt;<br>&lt;h4&gt;Try Me!&lt;/h4&gt;<br>&lt;h5&gt;Try Me!&lt;/h5&gt;<br>&lt;h6&gt;Try Me!&lt;/h6&gt;<br>",
    bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
  },
  {
    title: "&lt;p&gt; tag",
    desc: "The &lt;p&gt; tag is used to define a paragraph in HTML "+
          "It is commonly used for normal text content.",
    top: "&lt;html&gt;<br>&lt;body&gt;<br>",
    middle: "&lt;p&gt;Hello World&lt;/p&gt;",
    bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
  },
  {
    title: "&lt;br&gt; tag",
    desc: "The &lt;br&gt; tag is used to insert a line break. ",
    top: "&lt;html&gt;<br>&lt;body&gt;<br>",
    middle: "&lt;p&gt;Hello <span class='highlight'>&lt;br&gt; Welcome to HTML</span>&lt;/p&gt;",
    bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
  },

  {
    title: "&lt;a&gt; tag",
    desc: "Used to create links.",
    top: "&lt;html&gt;<br>&lt;body&gt;<br>",
    middle: "&lt;a href='https://example.com'&gt;Visit&lt;/a&gt;",
    bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
  },
  {
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
    bottom: "&lt;/body&gt;<br>&lt;/html&gt;"
  },
  {
    
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
    title: "HTML Class Example",
    desc: "Using a class selector to style a div.",

    top: `
      &lt;html&gt;<br>
      &lt;style&gt;<br>
      <span class="highlight">
      .city{<br>
        background-color:yellow;<br>
        color:red;<br>
        border:2px solid black;<br>
      }<br>
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
    title: "HTML id Attribute",
    desc: "The id attribute specifies a unique id for an HTML element. It is styled using # followed by the id name.",
    top: `
      &lt;html&gt;<br>
      &lt;style&gt;<br>
      <span class="highlight">
      #myHeader {<br>
        background-color: lightblue;<br>
        color: black;<br>
      }<br>
      </span>
      .city {<br>
        background-color: yellow;<br>
        color: red;<br>
      }<br>
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
    title: "HTML Buttons",
    desc: "The &lt;button&gt; tag is used to create a clickable button on a webpage. Buttons can submit forms, run JavaScript, or trigger actions when clicked.",
    top: `&lt;html&gt;<br>&lt;body&gt;<br>`,
    middle: `
      &lt;h1&gt;HTML Buttons&lt;/h1&gt;<br>
      &lt;p&gt;This is a basic HTML button. It can be clicked,<br>
      but it will not do anything until you add an action to it.&lt;/p&gt;<br>
      <span class="highlight">
      &lt;button&gt;Click Me&lt;/button&gt;
      </span><br>
      `,
    bottom: `&lt;/body&gt;<br>&lt;/html&gt;`
  },
  {
    title: "HTML Forms",
    desc: "The &lt;form&gt; element is used to create an HTML form. The &lt;input&gt; element is used to collect data from users. Different input types are used for different kinds of input.",
    top: `&lt;html&gt;<br>&lt;body&gt;<br>`,
    middle: `
      <pre class="highlight-pre">
      &lt;h2&gt;HTML Forms&lt;/h2&gt;

      <span class="highlight">&lt;form&gt;</span>

      <span class="highlight">&lt;label for="username"&gt;</span>Name:<span class="highlight">&lt;/label&gt;</span>
      <span class="highlight">&lt;input type="text" id="username"&gt;</span>
      &lt;br&gt;&lt;br&gt;

      <span class="highlight">&lt;label&gt;</span>
      <span class="highlight">&lt;input type="checkbox"&gt;</span> I agree
      <span class="highlight">&lt;/label&gt;</span>
      &lt;br&gt;&lt;br&gt;

      <span class="highlight">&lt;label&gt;</span>Gender:<span class="highlight">&lt;/label&gt;</span>
      &lt;br&gt;
      <span class="highlight">&lt;input type="radio" name="gender"&gt;</span> Male
      &lt;br&gt;
      <span class="highlight">&lt;input type="radio" name="gender"&gt;</span> Female
      &lt;br&gt;&lt;br&gt;

      <span class="highlight">&lt;input type="button" value="Submit"&gt;</span>

      <span class="highlight">&lt;/form&gt;</span>
      </pre>
      `,

    bottom: `&lt;/body&gt;<br>&lt;/html&gt;`
  },
  {
    title: "&lt;form&gt; tag",
    desc: "Used to collect user input using input fields like text and password.",
    top:
      "&lt;html&gt;<br>" +
      "&lt;body&gt;<br>",

    middle:
      "<pre class='highlight-pre'>" +
      "&lt;h2&gt;HTML Forms&lt;/h2&gt;<br><br>" +

      "&lt;form&gt;<br><br>" +

      "<span class='highlight'>&lt;label for=\"username\"&gt;</span>Name:" +
      "<span class='highlight'>&lt;/label&gt;</span><br>" +
      "&lt;input type=\"text\" id=\"username\"&gt;<br><br>" +

      "<span class='highlight'>&lt;label for=\"password\"&gt;</span>Password:" +
      "<span class='highlight'>&lt;/label&gt;</span><br>" +
      "&lt;input type=\"password\" id=\"password\" name=\"password\"&gt;<br><br>" +

      "&lt;input type=\"button\" value=\"Submit\"&gt;<br><br>" +

      "&lt;/form&gt;" +
      "</pre>",

    bottom:
      "&lt;/body&gt;<br>" +
      "&lt;/html&gt;"
  },
  {
    title: "Text Fields",
    desc: "&lt;input type=\"text\"&gt; creates a single-line input field for users to enter text, like names or addresses.",

    top: `
      &lt;html&gt;<br>
      &lt;body&gt;<br>
      `,
    middle: `
      <pre class="highlight-pre">
      &lt;h2&gt;Text input fields&lt;/h2&gt;

      &lt;form&gt;

      &lt;label for="fname"&gt;First Name:&lt;/label&gt;
      <span class="highlight">&lt;input type="text" id="fname"&gt;</span>
      &lt;br&gt;&lt;br&gt;

      &lt;label for="lname"&gt;Last Name:&lt;/label&gt;
      <span class="highlight">&lt;input type="text" id="lname"&gt;</span>
      &lt;br&gt;&lt;br&gt;

      <span class="highlight">&lt;input type="button" value="Submit" onclick="alert('You submitted successfully!')"&gt;</span>

      &lt;/form&gt;
      </pre>
      `,
    bottom: `
      &lt;/body&gt;<br>
      &lt;/html&gt;<br>
      `
  },
  {
    title: "Radio Buttons",
    desc: "The &lt;input type=\"radio\"&gt; defines a radio button. Radio buttons allow users to select only one option from a group of related choices.",

    top: `
      &lt;html&gt;<br>
      &lt;body&gt;<br>
      `,

    middle: `
      <pre class="highlight-pre">
      &lt;h2&gt;Radio Buttons&lt;/h2&gt;

      &lt;form&gt;

      <span class="highlight">&lt;input type="radio" id="html" name="language" value="HTML"&gt;</span>
      &lt;label for="html"&gt;HTML&lt;/label&gt;&lt;br&gt;

      <span class="highlight">&lt;input type="radio" id="css" name="language" value="CSS"&gt;</span>
      &lt;label for="css"&gt;CSS&lt;/label&gt;&lt;br&gt;

      <span class="highlight">&lt;input type="radio" id="javascript" name="language" value="JavaScript"&gt;</span>
      &lt;label for="javascript"&gt;JavaScript&lt;/label&gt;

      &lt;/form&gt;
      </pre>
      `,

    bottom: `
      &lt;/body&gt;<br>
      &lt;/html&gt;<br>
      `
  },

  {
    title: "Checkboxes",
    desc: "Checkboxes allow users to select one or more options from a set of choices.",

    top: `
      &lt;html&gt;<br>
      &lt;body&gt;<br>
      `,

    middle: `
      <pre class="highlight-pre">
      &lt;h2&gt;Checkboxes&lt;/h2&gt;
      &lt;p&gt;Select your favorite fruits:&lt;/p&gt;

      &lt;form&gt;

      <span class="highlight">&lt;input type="checkbox" id="apple" name="fruit" value="Apple"&gt;</span>
      &lt;label for="apple"&gt;Apple&lt;/label&gt;

      <span class="highlight">&lt;input type="checkbox" id="cherry" name="fruit" value="Cherry"&gt;</span>
      &lt;label for="cherry"&gt;Cherry&lt;/label&gt;

      <span class="highlight">&lt;input type="checkbox" id="mango" name="fruit" value="Mango"&gt;</span>
      &lt;label for="mango"&gt;Mango&lt;/label&gt;

      &lt;/form&gt;
      </pre>
      `,

    bottom: `
      &lt;/body&gt;<br>
      &lt;/html&gt;<br>
`
  }
 
];


let currentLesson = 0;
let canGoNext = false;

let points = 0;
let completedLessons = {}; // lessonIndex : true

// ==========================
// PAGE LOAD
// ==========================
window.onload = async () => {
  await loadAlert();
  await restoreProgressFromBackend();
  loadLesson(0);
};

// ==========================
// RESTORE PROGRESS FROM BACKEND
// ==========================
async function restoreProgressFromBackend() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}`);
    const data = await res.json();

    points = data.points || 0;

    // Restore completed lessons (1 lesson = 2 points)
    completedLessons = {};
    const completedCount = Math.floor(points / 2);
    for (let i = 0; i < completedCount; i++) {
      completedLessons[i] = true;
    }

    document.getElementById("point").innerText = points;

    console.log("✅ Restored points:", points);
    console.log("✅ Completed lessons:", completedLessons);
  } catch (err) {
    console.error("❌ Failed to restore progress", err);
  }
}

// ==========================
// LOAD LESSON
// ==========================
function loadLesson(index) {
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

  // allow next only if already completed
  canGoNext = !!completedLessons[currentLesson];
}

// ==========================
// RUN CODE
// ==========================
function runCode() {
  const editor = document.getElementById("editor");
  const iframe = document.getElementById("output");
  const code = editor.value.trim();

  if (code === "") {
    showAlert();
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

  // Give points only once per lesson
  if (!completedLessons[currentLesson]) {
    completedLessons[currentLesson] = true;
    points += 2;
    document.getElementById("point").innerText = points;

    updateProgressToBackend();
  }
}

// ==========================
// NAVIGATION
// ==========================
function nextLesson() {
  if (!canGoNext) {
    showAlert();
    return;
  }
  if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1);
}

function prevLesson() {
  if (currentLesson > 0) loadLesson(currentLesson - 1);
}

// ==========================
// CUSTOM ALERT
// ==========================
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
        value: 2
      })
    });

    console.log("✅ Progress saved to backend");
  } catch (err) {
    console.error("❌ Failed to save progress", err);
  }
}