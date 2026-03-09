const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("pass").value.trim();
    const cpassword = document.getElementById("cpass").value.trim();

    // Clear previous errors
    document.getElementById("userError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("cpassError").textContent = "";
    document.getElementById("serverError").textContent = "";

    let valid = true;

    // Validation
    if (!username) { document.getElementById("userError").textContent = "Username required"; valid = false; }
    if (!email) { document.getElementById("emailError").textContent = "Email required"; valid = false; }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) { document.getElementById("emailError").textContent = "Enter valid email"; valid = false; }
    if (!password) { document.getElementById("passwordError").textContent = "Password required"; valid = false; }
    else if (password.length < 8) { document.getElementById("passwordError").textContent = "At least 8 characters"; valid = false; }
    if (!cpassword) { document.getElementById("cpassError").textContent = "Confirm password"; valid = false; }
    else if (password !== cpassword) { document.getElementById("cpassError").textContent = "Passwords do not match"; valid = false; }

    if (!valid) return;

    console.log("Sending signup:", { username, email, password });

    try {
        const res = await fetch("/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });

        const data = await res.json();
        console.log("Server response:", data);

        if (data.success) {
            alert("Signup successful!");
            window.location.href = "login.html"; // redirect to login
        } else {
            // Show server message (duplicate email, etc.)
            document.getElementById("serverError").textContent = data.message;
        }

    } catch (err) {
        console.error("Signup error:", err);
        document.getElementById("serverError").textContent = "Server error. Try again.";
    }
});
