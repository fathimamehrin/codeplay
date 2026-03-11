const getStartedBtn = document.getElementById("get-started-btn");

getStartedBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const userEmail = localStorage.getItem("userEmail");
  if (!userEmail) {
    window.location.href = "login.html";
    return;
  }

  try {
    const res = await fetch(`/get-progress?email=${encodeURIComponent(userEmail)}`);
    const data = await res.json();
    const lastPage = data.lastVisited || "home.html";
    window.location.href = lastPage;
  } catch (err) {
    console.error(err);
    window.location.href = "home.html";
  }
});