window.onload = function () {
    let username = localStorage.getItem("username") || "User";
    document.getElementById("welcomeText").innerHTML = `Heyy, ${username}...<br>Let’s Code!`;
};
