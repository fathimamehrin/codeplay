document.addEventListener("DOMContentLoaded", () => {

  const getStartedBtn = document.getElementById("get-started-btn");

  if (!getStartedBtn) return;

  getStartedBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
      // User not logged in
      window.location.href = "login.html";
    } 
    else {
      // User logged in
      window.location.href = "home.html";
    }

  });

});