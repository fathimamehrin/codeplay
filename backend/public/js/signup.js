document.getElementById("form").addEventListener("submit", async  (e)=> {
    e.preventDefault();

    const userInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passInput = document.getElementById("pass");
    const cpassInput = document.getElementById("cpass");

    const userError = document.getElementById("userError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const cpassError = document.getElementById("cpassError");

    const username = userInput.value.trim();
    const email = emailInput.value.trim();
    const password = passInput.value.trim();
    const cpassword = cpassInput.value.trim();

    // clear errors
    userError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    cpassError.innerHTML = "";

    let valid = true;

    // username check
    if (username === "") {
        userError.innerHTML = "Username is required";
        valid = false;
    }

    // email check
    if (email === "") {
        emailError.innerHTML = "Email is required";
        valid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        emailError.innerHTML = "Enter a valid email";
        valid = false;
    }

    // password check
    if (password === "") {
        passwordError.innerHTML = "Password is required";
        valid = false;
    } else if (password.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters";
        valid = false;
    }

    // confirm password check
    if (cpassword === "") {
        cpassError.innerHTML = "Confirm your password";
        valid = false;
    } else if (password !== cpassword) {
        cpassError.innerHTML = "Passwords do not match";
        valid = false;
    }

    if (!valid) return;

    // 🔵 SIGNUP REQUEST
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    })
    .then(res => res.text())
    .then(data => {
        if (data === "User registered successfully") {
            window.location.href = "login.html";
        } else {
            emailError.innerHTML = data;
        }
    })
    .catch(err => {
        console.error(err);
        emailError.innerHTML = "Server error. Try again.";
    });
});
