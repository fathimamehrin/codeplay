document.getElementById("form").addEventListener("submit", async (e)=>{
    e.preventDefault();

    

    const emailInput = document.getElementById("email");
    const passInput = document.getElementById("pass");

    
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    
    const email = emailInput.value.trim();
    const password = passInput.value.trim();

    
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    let valid = true;


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

    if (!valid) return;

    if (valid) {
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email,password})
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            window.location.href = "welcome.html";
            
            localStorage.setItem("userEmail", data.email);

            localStorage.setItem("userLevel", data.level);

            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", "/images/Ellipse 1.png");
            
        } else {
            passwordError.innerHTML = data.message; // show backend error
        }
    })
    .catch(err => {
        console.error(err);
        passwordError.innerHTML = "Server error. Try again.";
    });
}



    
});

