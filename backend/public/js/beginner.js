function selectLevel(level){
  const email = localStorage.getItem("userEmail");

  

  fetch("/set-level",{
    method : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, level })
  })
  .then(res => res.json())
  .then(data => {
     if (data.level) {
      // ✅ CONNECTION HAPPENS HERE
      localStorage.setItem("userLevel", data.level);

      // move to home.html
      window.location.href = "/home.html";
    } else {
      alert(data.message);
    }
    })
  .catch(() => alert("Server error"));
}


document.getElementById("beginner").onclick = () => selectLevel("beginner");
document.getElementById("intermediate").onclick = () => selectLevel("intermediate");
