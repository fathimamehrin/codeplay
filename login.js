function verify() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passInput = document.getElementById("pass");

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Clear errors while typing
    nameInput.addEventListener("input", function() {
        if(nameInput.value.trim() !== "") {
            nameError.innerHTML = "";
        }
    });

    emailInput.addEventListener("input", function() {
        if(emailInput.value.trim() !== "") {
            emailError.innerHTML = "";
        }
    });

    passInput.addEventListener("input", function() {
        if(passInput.value.trim() !== "") {
            passwordError.innerHTML = "";
        }
    });

    document.getElementById("form").addEventListener("submit", function(e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const pass = passInput.value.trim();

        if(name === ""){
            nameError.innerHTML = "name is required";
        }

        if(email === ""){
            emailError.innerHTML = "email is required";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
            emailError.innerHTML = "Please enter a valid email address";
        }

        if(pass === ""){
            passwordError.innerHTML = "Password is required";
        } else if(pass.length < 8){
            passwordError.innerHTML = "password must be atleast 8 characters";
        }
    });
}
