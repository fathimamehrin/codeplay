let step = 0;

const tasks = [
  {
    text: "Add a clickable link",
    tag: "a",
    html: '<a href="#">Visit Website</a>'
  },
  {
    text: "Add an image",
    tag: "img",
    html: '<img src="sample.png" alt="Sample Image" class="game-img">'
  },
  {
    text: "Add a simple table",
    tag: "table",
    html: `
      <table border="1" cellpadding="5">
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr>
          <td>Alex</td>
          <td>20</td>
        </tr>
      </table>
    `
  },
  {
    text: "Add an ordered list",
    tag: "ol",
    html: `
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ol>
    `
  },
  {
    text: "Add an unordered list",
    tag: "ul",
    html: `
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
    `
  },
  {
    text: "Add a description list",
    tag: "dl",
    html: `
      <dl>
        <dt>HTML</dt>
        <dd>Structure of web pages</dd>
        <dt>CSS</dt>
        <dd>Styles the web page</dd>
      </dl>
    `
  },
  {
    text: "Add a div container",
    tag: "div",
    html: `
      <div style="padding:10px; border:1px solid #ccc;">
        This content is inside a div
      </div>
    `
  }
];

const taskText = document.getElementById("task");
const output = document.getElementById("output");
const message = document.getElementById("message");
const buttonsContainer = document.querySelector(".buttons");

/* 🔀 Shuffle buttons */
function shuffleButtons() {
  const buttons = Array.from(buttonsContainer.children);
  buttons.sort(() => Math.random() - 0.5);
  buttons.forEach(btn => buttonsContainer.appendChild(btn));
}

shuffleButtons();

/* 🎮 Game logic */
buttonsContainer.addEventListener("click", e => {
  if (!e.target.matches("button")) return;

  const selectedTag = e.target.dataset.tag;

  if (selectedTag === tasks[step].tag) {
    output.innerHTML += tasks[step].html;
    message.textContent = "✅ Correct!";
    message.className = "correct";
    step++;

    shuffleButtons();

    if (step < tasks.length) {
      taskText.textContent = "Task: " + tasks[step].text;
    } else {
      taskText.textContent = "🎉 All tasks completed!";
      message.textContent = "You learned important HTML elements!";
    }
  } else {
    message.textContent = "❌ Wrong tag. Try again!";
    message.className = "wrong";
  }
});
