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
title :"JavaScript Variables",
desc :"In JavaScript, variables are used to store data values. In this example, <b>x</b>, <b>y</b>, and <b>z</b> are variables, and <b>z</b> stores the result of adding x and y.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;h1&gt;JavaScript Variables&lt;/h1&gt;<br>
&lt;p&gt;In this example, x, y, and z are variables.&lt;/p&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 5;<br>" +
"let y = 6;<br>" +
"let z = x + y;<br><br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = &quot;The value of z is &quot; + z;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},

{
title :"JavaScript Data Types",
desc :"JavaScript variables can store different types of data. Common data types include <b>String</b>, <b>Number</b>, and <b>Boolean</b>.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let name = &quot;John&quot;;<br>" +
"let age = 25;<br>" +
"let student = true;<br><br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = name + &quot; is &quot; + age + &quot; years old&quot;;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"JavaScript String",
desc :"A <b>String</b> represents text. Strings are written inside single or double quotes.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let text = &quot;Hello JavaScript&quot;;<br><br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = text;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"JavaScript Number",
desc :"The <b>Number</b> data type represents numeric values like integers and decimals.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"let y = 5;<br>" +
"let sum = x + y;<br><br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = sum;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"JavaScript Boolean",
desc :"A <b>Boolean</b> data type represents two values: <b>true</b> or <b>false</b>.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let isStudent = true;<br><br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = isStudent;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"JavaScript Operators",
desc :"Operators are symbols used to perform operations on variables and values. JavaScript has different types of operators such as <b>Arithmetic</b>, <b>Assignment</b>, <b>Comparison</b>, and <b>Logical</b> operators.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"let y = 5;<br><br>" +
"let result = x + y;<br><br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = &quot;Result is &quot; + result;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"Arithmetic Operators (Addition)" ,
desc :"The addition operator (+) adds numbers:",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"let y = 5;<br><br>" +
"let add = x + y;<br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = add;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},

{
title :"Arithmetic Operators (Subtraction)" ,
desc :"The subtraction operator (-) subtracts one number from another:",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"let y = 5;<br><br>" +
"let sub = x - y;<br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = sub;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"Arithmetic Operators (Multiplication)" ,
desc :"The multiplication operator (*) multiplies numbers:",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"let y = 5;<br><br>" +
"let mul = x * y;<br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = mul;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"Arithmetic Operators (Division)" ,
desc :"The division operator (/) divides one number by another:",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"let y = 5;<br><br>" +
"let div = x / y;<br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = div;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"Assignment Operators",
desc :"Assignment operators are used to assign values to variables.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"x += 5; //x=x+5 <br><br>" + 
"document.getElementById(&quot;demo&quot;).innerHTML = x;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"Comparison Operators",
desc :"Comparison operators are used to compare two values and return <b>true</b> or <b>false</b>.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"let y = 5;<br><br>" +
"let result = x &gt; y;<br><br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = result;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"Comparison Operator (Equal to =)" ,
desc :"The equal to operator (==) checks if two values are equal.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"let y = 10;<br><br>" +
"let result = x == y;<br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = result;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"Comparison Operator (Not Equal !=)" ,
desc :"The not equal operator (!=) checks if two values are not equal.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"let y = 5;<br><br>" +
"let result = x != y;<br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = result;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"Comparison Operator (Greater Than >)" ,
desc :"The greater than operator (>) checks if the first value is greater than the second value.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"let y = 5;<br><br>" +
"let result = x &gt; y;<br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = result;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"Comparison Operator (Less Than  <)" ,
desc :"The less than operator (<) checks if the first value is smaller than the second value.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 5;<br>" +
"let y = 10;<br><br>" +
"let result = x &lt; y;<br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = result;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"Comparison Operator (Greater Than or Equal >=)" ,
desc :"The greater than or equal operator (>=) checks if the first value is greater than or equal to the second value.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 10;<br>" +
"let y = 10;<br><br>" +
"let result = x &gt;= y;<br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = result;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"Comparison Operator (Less Than or Equal <=)" ,
desc :"The less than or equal operator (<=) checks if the first value is less than or equal to the second value.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let x = 5;<br>" +
"let y = 10;<br><br>" +
"let result = x &lt;= y;<br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = result;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"JavaScript If Statement" ,
desc :"The <b>if</b> statement runs a block of code if a specified condition is true.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let age = 18;<br><br>" +
"if(age &gt;= 18){<br>" +
"&nbsp;&nbsp;document.getElementById(&quot;demo&quot;).innerHTML = &quot;You can vote&quot;;<br>" +
"}<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"JavaScript If...Else Statement" ,
desc :"The <b>if...else</b> statement runs one block of code if the condition is true and another block if it is false.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let age = 16;<br><br>" +
"if(age &gt;= 18){<br>" +
"&nbsp;&nbsp;document.getElementById(&quot;demo&quot;).innerHTML = &quot;You can vote&quot;;<br>" +
"}else{<br>" +
"&nbsp;&nbsp;document.getElementById(&quot;demo&quot;).innerHTML = &quot;You cannot vote&quot;;<br>" +
"}<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"JavaScript Else If Statement" ,
desc :"The <b>else if</b> statement is used to check multiple conditions.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let marks = 75;<br><br>" +
"if(marks &gt;= 90){<br>" +
"&nbsp;&nbsp;document.getElementById(&quot;demo&quot;).innerHTML = &quot;Grade A&quot;;<br>" +
"}else if(marks &gt;= 60){<br>" +
"&nbsp;&nbsp;document.getElementById(&quot;demo&quot;).innerHTML = &quot;Grade B&quot;;<br>" +
"}else{<br>" +
"&nbsp;&nbsp;document.getElementById(&quot;demo&quot;).innerHTML = &quot;Grade C&quot;;<br>" +
"}<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
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
    {
title :"JavaScript Arrays",
desc :"An array is used to store multiple values in a single variable. Array values are written inside square brackets <b>[ ]</b> and separated by commas.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let fruits = [&quot;Apple&quot;, &quot;Mango&quot;, &quot;Banana&quot;];<br><br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = fruits;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},
{
title :"JavaScript Objects",
desc :"Objects are used to store multiple values in a single variable using <b>key:value</b> pairs.",

top: `
&lt;html&gt;<br>
&lt;body&gt;<br><br>

&lt;p id="demo"&gt;&lt;/p&gt;<br><br>

&lt;script&gt;<br>
`,

middle:
"let person = {name:&quot;John&quot;, age:25};<br><br>" +
"document.getElementById(&quot;demo&quot;).innerHTML = person.name;<br>",

bottom: `
&lt;/script&gt;<br><br>
&lt;/body&gt;<br>
&lt;/html&gt;
`
},

];

// ==========================
// GLOBAL VARIABLES
// ==========================
let currentJsLesson = 0;
let canGoNextJs = false;
let jsPoints = 0;
let completedJsLessons = {};
let currentGameIndex = 0;

completedJsLessons =
  JSON.parse(localStorage.getItem("completedJsLessons")) || {};

const lessonGames = {
  2: "/jsgame1.html", // Game after lesson 2
  5: "/jsgame2.html"  // Game after lesson 5
};

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
  await restoreJsProgressFromBackend();

  // GAME REWARD CHECK
  const gameResult = localStorage.getItem("jsGameResult");
  const gameRewarded = localStorage.getItem("jsGameRewarded");

  if (gameResult === "complete" && !gameRewarded) {
    jsPoints += 5;
    document.getElementById("point").innerText = jsPoints;

    await fetch("/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        subject: "js",
        value: 5
      })
    });

    localStorage.setItem("jsGameRewarded", "true");
    localStorage.removeItem("jsGameResult");
  }

  const params = new URLSearchParams(window.location.search);
  const lessonFromUrl = params.get("jsLesson");

  if (lessonFromUrl !== null) {
    currentJsLesson = Number(lessonFromUrl);
  }

  loadJsLesson(currentJsLesson);
};

// ==========================
// RESTORE PROGRESS
// ==========================
async function restoreJsProgressFromBackend() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}&subject=js`);
    const data = await res.json();

    jsPoints = data.points || 0;
    document.getElementById("point").innerText = jsPoints;

  } catch (err) {
    console.error("❌ Restore failed", err);
  }
}

// ==========================
// LOAD LESSON
// ==========================
function loadJsLesson(index) {
  if (!jsLessons[index]) return;

  currentJsLesson = index;

  const lesson = jsLessons[index];

  document.getElementById("lesson-title").innerHTML = lesson.title;
  document.getElementById("lesson-desc").innerHTML = lesson.desc;
  document.getElementById("lesson-top").innerHTML = lesson.top;
  document.getElementById("lesson-middle").innerHTML = lesson.middle;
  document.getElementById("lesson-bottom").innerHTML = lesson.bottom;

  const editor = document.getElementById("lesson-editor");
  editor.value = "";
  editor.style.display = "block";
  document.getElementById("output").style.display = "none";

  canGoNextJs = !!completedJsLessons[index];
}

// ==========================
// RUN CODE
// ==========================
function runJsCode() {
  const editor = document.getElementById("lesson-editor");
  const iframe = document.getElementById("output");
  const code = editor.value.trim();

  if (code === "") {
    showAlert();
    return;
  }

  editor.style.display = "none";
  iframe.style.display = "block";

  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(`<script>${code}<\/script>`);
  doc.close();

  canGoNextJs = true;

  if (!completedJsLessons[currentJsLesson]) {
    completedJsLessons[currentJsLesson] = true;
    jsPoints += 2;
    document.getElementById("point").innerText = jsPoints;

    localStorage.setItem(
      "completedJsLessons",
      JSON.stringify(completedJsLessons)
    );

    updateJsProgressToBackend();
  }
}

// ==========================
// NEXT BUTTON
// ==========================
function nextJsLesson() {
  if (!canGoNextJs) {
    showAlert();
    return;
  }

  // Check for game
  if (lessonGames[currentJsLesson]) {
    const gameDone = localStorage.getItem("jsGameResult");

    if (gameDone !== "complete") {
      localStorage.removeItem("jsGameRewarded");
      window.location.href =
        `${lessonGames[currentJsLesson]}?jsLesson=${currentJsLesson}`;
      return;
    }

    localStorage.removeItem("jsGameResult");
  }

  if (currentJsLesson < jsLessons.length - 1) {
    window.location.href =
      `jsLesson.html?jsLesson=${currentJsLesson + 1}`;
  }
}

// ==========================
// PREV BUTTON
// ==========================
function prevJsLesson() {
  if (currentJsLesson > 0) {
    window.location.href = `jsLesson.html?jsLesson=${currentJsLesson - 1}`;
  } else {
    window.location.href = "jsIntro.html";
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

function showAlert() {
  document.getElementById("customAlert").style.display = "block";
  document.getElementById("alertOverlay").style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
  document.getElementById("alertOverlay").style.display = "none";
}

// ==========================
// SAVE PROGRESS
// ==========================
async function updateJsProgressToBackend() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    await fetch("/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        subject: "js",
        value: 2
      })
    });

  } catch (err) {
    console.error("❌ Save failed", err);
  }
}

