let points = 0;

window.onload = async () => {
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("userEmail");
  const profilePic = localStorage.getItem("profilePic");

  // PROFILE
  const usernameEl = document.getElementById("home-username");
  if (usernameEl) {
    usernameEl.textContent = username || "Username";
  }

  const profilePicEl = document.getElementById("home-profile-pic");
  if (profilePicEl) {
    profilePicEl.src = profilePic || "/images/default.png";
  }

  // STUDYDECK TOGGLE
  const studydeckArrow = document.querySelector(".studydeck-arrow");

  if (studydeckArrow) {
    studydeckArrow.addEventListener("click", (e) => {
      e.stopPropagation();

      const submenu = studydeckArrow.parentElement.nextElementSibling;
      if (!submenu) return;

      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    });
  }

  // HTML / CSS / JS TOGGLES
  document.querySelectorAll(".tech-arrow").forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.stopPropagation();

      const submenu = arrow.parentElement.nextElementSibling;
      if (!submenu) return;

      submenu.style.display =
        submenu.style.display === "block" ? "none" : "block";
    });
  });

  // FETCH USER DATA
  if (!email) return;

  try {
    const res = await fetch(`/get-progress?email=${email}`);
    const data = await res.json();

    console.log("Fetched user data:", data);

    if (typeof applyBackendData === "function") {
      applyBackendData(data);
    }
  } catch (err) {
    console.error("Failed to load user data", err);
  }
};