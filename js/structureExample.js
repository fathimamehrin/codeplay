function runCode() {
  const code = document.getElementById("editor").value;
  const iframe = document.getElementById("output");
  const editor = document.getElementById("editor");

  editor.style.display = "none";
  iframe.style.display = "block";

  iframe.contentDocument.open();
  iframe.contentDocument.write(`
    <!DOCTYPE html>
    <html>
    <body contenteditable="true">
      ${code}
    </body>
    </html>
  `);
  iframe.contentDocument.close();
}
