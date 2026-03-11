// -------------------------
// GET LOGGED-IN USER EMAIL
// -------------------------
const userEmail = localStorage.getItem("userEmail");
if (!userEmail) {
  alert("You are not logged in!");
  window.location.href = "login.html";
}

// -------------------------
// ELEMENTS
// -------------------------
const usernameEl = document.getElementById("username");
const profilePicEl = document.getElementById("profilePic");
const streakEl = document.getElementById("streak");
const totalEggEl = document.getElementById("totalEgg");
const fileInput = document.getElementById("fileInput");

// -------------------------
// LOAD PROFILE DATA FROM BACKEND
// -------------------------
async function loadProfile() {
  try {
    const res = await fetch(`/get-progress?email=${encodeURIComponent(userEmail)}`);
    if (!res.ok) throw new Error("Failed to fetch user data");
    const data = await res.json();

    // Load all fields from backend
    usernameEl.innerText = data.username || "username";
    streakEl.innerText = data.streak || 0;
    totalEggEl.innerText = data.points || 0;
    profilePicEl.src = data.profilePic || "default.png";

    // Save username locally for instant edits
    localStorage.setItem("username", data.username || "username");

  } catch (err) {
    console.error(err);
  }
}

window.onload = loadProfile;

// -------------------------
// UPDATE USERNAME LIVE (with debounce)
// -------------------------
let typingTimer;
usernameEl.addEventListener("input", function() {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(async () => {
    const newName = usernameEl.innerText.trim();
    localStorage.setItem("username", newName);

    try {
      await fetch("/update-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, username: newName })
      });
    } catch (err) {
      console.error("Failed to update username:", err);
    }
  }, 500); // waits 500ms after typing stops
});

// -------------------------
// UPDATE PROFILE PICTURE
// -------------------------
fileInput.addEventListener("change", async function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = async function (e) {
    const base64Image = e.target.result;
    profilePicEl.src = base64Image;

    try {
      await fetch("/update-progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, profilePic: base64Image })
      });
    } catch (err) {
      console.error("Failed to update profile picture:", err);
    }
  };
  reader.readAsDataURL(file);
});