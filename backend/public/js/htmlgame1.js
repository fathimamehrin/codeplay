
const prompts = [
  {
    text: "Make the text blue",
    rules : {
      "color" : "blue"
    }
  },
  {
    text: "Increase the font size to 24px",
    rules : {
      "font-size" : "24px"
    }
  },
  {
    text: "Change the font family to Arial",
    rules : {
      "font-family" : "arial"
    }
  },
  {
    text: "Make the text bold",
    rules : {
      "font-weight" : "bold"
    }
  },
  {
    text: "Make the text red and bold",
    rules : {
      "color" : "red",
      "font-weight" : "bold"
    }
  }
];

let level = 0;

const promptEl = document.getElementById("prompt");
const editor = document.getElementById("editor");
const target = document.getElementById("target-text");
const result = document.getElementById("result");


function loadLevel() {
  promptEl.textContent = prompts[level].text;
  editor.value = "";
  target.style = "";
  result.textContent = "";
}

function getCSSValue(property, css) {
  const regex = new RegExp(property + "\\s*:\\s*([^;]+);", "i");
  const match = css.match(regex);
  return match ? match[1].trim().toLowerCase() : null;
}



function checkCSS() {
  const css = editor.value;
  const rules = prompts[level].rules;

  let isCorrect = true;

   for (let prop in rules) {
    const expectedValue = rules[prop];
    const actualValue = getCSSValue(prop, css);

    // property missing
    if (!actualValue) {
      isCorrect = false;
      break;
    }

    // value mismatch
    if (actualValue !== expectedValue) {
      isCorrect = false;
      break;
    }
  }

  if (isCorrect) {
    target.style.cssText = css;
    result.textContent = "✅ Level Cleared!";
    result.style.color = "#57535a";

    level++;

    if (level < prompts.length) {
      setTimeout(loadLevel, 1200);
    } else {
      result.textContent = "🎉All Levels Completed!";
    }
  } else {
    result.textContent = "❌ Try again. Follow the prompt!";
    result.style.color = "#ff6b6b";
  }
}

loadLevel();