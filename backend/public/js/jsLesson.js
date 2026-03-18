const jsLessons = [
  {
    id:"js-output",
    title :"JavaScript Output",
    desc :"JavaScript can display output using alerts, console messages, or by updating page content using methods like <b>innerHTML</b>.",
    top: `
    &lt;html&gt;<br>
    &lt;body&gt;<br><br>

    &lt;p id="demo"&gt;&lt;/p&gt;<br><br>

    &lt;script&gt;<br>
  `,
  middle:
    "document.getElementById(&quot;demo&quot;).innerHTML = &quot;&lt;h2&gt;Hello World&lt;/h2&gt;&quot;;<br>",
  bottom: `
    &lt;/script&gt;<br><br>
    &lt;/body&gt;<br>
    &lt;/html&gt;
  `
  },
  {
    id:"js-variables",
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
  id:"js-datatypes",
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
  id:"js-string",
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
  id:"js-number",
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
  id:"js-boolean",
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
  id:"js-operators",
title :"JavaScript Operators",
desc :"Operators are symbols used to perform operations on values and variables, such as Arithmetic, Assignment, Comparison, and Logical operators.",
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
  id:"js-addition",
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
  id:"js-subtraction",
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
  id:"js-multiplication",
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
  id:"js-division",
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
  id:"js-assignment",
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
  id:"js-comparison",
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
  id:"js-equal",
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
  id:"js-not-equal",
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
  id:"js-greater",
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
  id:"js-less",
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
  id:"js-greater-equal",
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
  id:"js-less-equal",
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
  id:"js-if",
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
  id:"js-if-else",
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
  id:"js-else-if",
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
    id:"js-for-loop",
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
    id:"js-while-loop",
    title : "While Loop",
    desc : "While loops execute a block of code as long as a specified condition is true.Javascript have two types of while loops, <b>while loop and do while loop </b>",
    top :`
      &lt;html&gt;<br>
      &lt;body&gt;<br>
      &lt;script&gt;<br>
      `,
    middle : `
      <pre class="highlight-pre">
      let i = 1;
      while (i &lt;= 3) {
      document.write("Welcome&lt;br&gt;");
      i++;
      }
      </pre>
      `,
      bottom : `&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;`
  },
  {
    id:"js-do-while",
    title : "DO..WHILE LOOP",
    desc : "The do...while loop runs the code once before checking the condition, then repeats while the condition is true.",
    top :`
      &lt;html&gt;<br>
      &lt;body&gt;<br>
      &lt;script&gt;<br>
      `,
    middle : `
      <pre class="highlight-pre">
      let i = 1;
      do {
      document.write("Learning JS&lt;br&gt;");
      i++;
    } while (i &lt;= 2);
      </pre>
      `,
      bottom : `&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;`
  },
  {
    id:"js-functions",
      title : "Functions",
      desc : "Functions are blocks of code that run when they are called.",
      top :`
        &lt;html&gt;<br>
        &lt;body&gt;<br>
        &lt;script&gt;<br>
        `,
      middle :
        "function greet() {<br>" +
        "&nbsp;&nbsp;alert(&quot;Hello!&quot;);<br>" +
        "}<br>" +
        "greet();",
        
      bottom : `&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;`

    },
  
    
    {
      id:"js-events",
      title : "Events",
      desc : "Events allow JavaScript to respond to user actions like clicking a button.",
      top :`
        &lt;html&gt;<br>
        &lt;body&gt;<br>
        &lt;button onclick=&quot;sayHi()&quot;&gt;Click Me&lt;/button&gt;
        &lt;script&gt;<br>
        `,
      middle :
        "function sayHi() {<br>" +
        "&nbsp;&nbsp;alert(&quot;Hi there!&quot;);<br>" +
        "}",
        
      bottom :  `&lt;/script&gt;<br>&lt;/body&gt;<br>&lt;/html&gt;`

    },
    {
      id:"js-arrays",
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
  id:"js-objects",
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

const jsValidations = [
  {
    lessonId: "js-output",
    validate: code => code.includes("document.getElementById") && code.includes("innerHTML")
  },
  {
    lessonId: "js-variables",
    validate: code => code.includes("let x") && code.includes("let y") && code.includes("let z")
  },
  {
    lessonId: "js-datatypes",
    validate: code => code.includes("let name") && code.includes("let age") && code.includes("let student")
  },
  {
    lessonId: "js-string",
    validate: code => code.includes("let text")
  },
  {
    lessonId: "js-number",
    validate: code => code.includes("let x") && code.includes("let y") && code.includes("let sum")
  },
  {
    lessonId: "js-boolean",
    validate: code => code.includes("true") || code.includes("false") || code.includes("isStudent")
  },
  {
    lessonId: "js-operators",
    validate: code => code.includes("+") || code.includes("-") || code.includes("*") || code.includes("/")
  },
  {
    lessonId: "js-addition",
    validate: code => code.includes("+")
  },
  {
    lessonId: "js-subtraction",
    validate: code => code.includes("-")
  },
  {
    lessonId: "js-multiplication",
    validate: code => code.includes("*")
  },
  {
    lessonId: "js-division",
    validate: code => code.includes("/")
  },
  {
    lessonId: "js-assignment",
    validate: code => code.includes("=") && code.includes("+=")
  },
  {
    lessonId: "js-comparison",
    validate: code => code.includes(">") || code.includes("<") || code.includes("==") || code.includes("!=")
  },
  {
    lessonId: "js-equal",
    validate: code => code.includes("==")
  },
  {
    lessonId: "js-not-equal",
    validate: code => code.includes("!=")
  },
  {
    lessonId: "js-greater",
    validate: code => code.includes(">")
  },
  {
    lessonId: "js-less",
    validate: code => code.includes("<")
  },
  {
    lessonId: "js-greater-equal",
    validate: code => code.includes(">=")
  },
  {
    lessonId: "js-less-equal",
    validate: code => code.includes("<=")
  },
  {
    lessonId: "js-if",
    validate: code => code.includes("if(") || code.includes("if (")
  },
  {
    lessonId: "js-if-else",
    validate: code => code.includes("if(") && code.includes("else")
  },
  {
    lessonId: "js-else-if",
    validate: code => code.includes("else if")
  },
  {
    lessonId: "js-for-loop",
    validate: code => code.includes("for(") || code.includes("for (")
  },
  {
    lessonId: "js-while-loop",
    validate: code => code.includes("while(") || code.includes("while (")
  },
  {
    lessonId: "js-do-while",
    validate: code => code.includes("do {") && code.includes("while")
  },
  {
    lessonId: "js-functions",
    validate: code => code.includes("function") && code.includes("greet()")
  },
  {
    lessonId: "js-events",
    validate: code => code.includes("onclick") && code.includes("function sayHi")
  },
  {
    lessonId: "js-arrays",
    validate: code => code.includes("[") && code.includes("]") && code.includes("fruits")
  },
  {
    lessonId: "js-objects",
    validate: code => code.includes("{") && code.includes("}") && code.includes("person")
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
  18: "/jsgame1.html", // Game after lesson 2
  28: "/jsgame2.html"  // Game after lesson 5
};

function updatePointsDisplay() {

  const pointsEl = document.getElementById("points-count");

  if (pointsEl) {
    pointsEl.innerText = jsPoints.toString().padStart(2, "0");
  }

}

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
     updatePointsDisplay();
    

    await fetch("/update-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        subject: "js",
        value: 5
      })
    });

    
    localStorage.removeItem("jsGameResult");
  }

  const params = new URLSearchParams(window.location.search);
  const lessonFromUrl = params.get("jsLesson");

  if (lessonFromUrl !== null) {
    currentJsLesson = Number(lessonFromUrl);
  }

  loadJsLesson(currentJsLesson);
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
async function restoreJsProgressFromBackend() {
  const email = localStorage.getItem("userEmail");
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}&subject=js`);
    const data = await res.json();

    jsPoints = data.points || 0;
updatePointsDisplay();

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
    showAlert("please enter some code");
    return;
  }

  // ---------- VALIDATION ----------
  const currentValidation = jsValidations.find(
    v => v.lessonId === jsLessons[currentJsLesson].id
  );

  let isValid = true;
  if (currentValidation && typeof currentValidation.validate === "function") {
    isValid = currentValidation.validate(code);
  }

  if (!isValid) {
    showAlert("❌ Your code does not match the lesson requirements. Check syntax or missing elements.")
    return; // Stop code execution if validation fails
  }


  editor.style.display = "none";
  iframe.style.display = "block";

  iframe.contentDocument.open();
  iframe.contentDocument.write(
    `<!DOCTYPE html><html><body>${code}</body></html>`
  );
  iframe.contentDocument.close();


  canGoNextJs = true;

  if (!completedJsLessons[currentJsLesson]) {
    completedJsLessons[currentJsLesson] = true;
    jsPoints += 2;

    updatePointsDisplay();
    
    let progress = parseInt(localStorage.getItem("jsLessonProgress")) || 0;

  // prevent duplicate counting
  let jsProgressKey = "js_" + currentJsLesson;

  if (!localStorage.getItem(jsProgressKey)) {
    progress++;
    localStorage.setItem("jsLessonProgress", progress);
    localStorage.setItem(jsProgressKey, "true");
  }

    localStorage.setItem(
      "completedJsLessons",
      JSON.stringify(completedJsLessons)
    );

   const email = localStorage.getItem("userEmail");

    if (email) {
      fetch("/update-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: "js",
          value: 2,
          completedLessons: { [currentJsLesson]: true }
        })
      })
      .then(res => res.json())
      .then(data => console.log("✅ Lesson progress synced", data))
      .catch(err => console.error("❌ Failed to sync", err));
    }
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
     currentJsLesson++;
      loadJsLesson(currentJsLesson);  // load next lesson
  }
}

// ==========================
// PREV BUTTON
// ==========================
function prevJsLesson() {
  if (currentJsLesson > 0) {
    window.location.href = `jsLesson.html?jsLesson=${currentJsLesson - 1}`;
  } else {
    window.location.href = "/jsIntro.html";
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

