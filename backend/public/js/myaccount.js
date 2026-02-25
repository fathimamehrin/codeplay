// -------------------------
// LOAD SAVED PROFILE DATA
// -------------------------
window.onload = function () {
    const savedName = localStorage.getItem("username");
    const savedPic = localStorage.getItem("profilePic");

    // Load username
    if (savedName) {
        document.getElementById("username").innerText = savedName;
    }

    // Load profile picture
    if (savedPic) {
        document.getElementById("profilePic").src = savedPic;
    }
};


// -------------------------
// SAVE USERNAME (LIVE)
// -------------------------
document.getElementById("username").addEventListener("input", function () {
    const newName = this.innerText.trim();
    localStorage.setItem("username", newName);
});


// -------------------------
// PROFILE PICTURE UPLOAD
// -------------------------
const fileInput = document.getElementById("fileInput");
const profilePic = document.getElementById("profilePic");

fileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            profilePic.src = e.target.result;

            // Save to storage
            localStorage.setItem("profilePic", e.target.result);
        };
        reader.readAsDataURL(file);
    }
});


// -------------------------
// BACK BUTTON → home.html
// -------------------------
document.querySelector(".back-btn").addEventListener("click", function () {
    window.location.href = "home.html";
});

