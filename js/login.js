document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passInput = document.getElementById("pass");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passInput.value.trim();

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    let valid = true;

    if(name === ""){
        nameError.innerHTML = "Name is required";
        valid = false;
    }

    if(email === ""){
        emailError.innerHTML = "Email is required";
        valid = false;
    } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
        emailError.innerHTML = "Enter a valid email";
        valid = false;
    }

    if(password === ""){
        passwordError.innerHTML = "Password is required";
        valid = false;
    } else if(password.length < 8){
        passwordError.innerHTML = "Password must be at least 8 characters";
        valid = false;
    }

    if(valid){
        localStorage.setItem("username", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", "/images/Ellipse 1.png");


        window.location.href = "welcome.html";
    }
});
