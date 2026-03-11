document.getElementById("adminForm").addEventListener("submit", async function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const res = await fetch("/admin-login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
    });

    const data = await res.json();

    if(res.ok){
        alert("Admin Login Successful");
        window.location.href = "/admin-dashboard.html";
    }
    else{
        alert(data.message);
    }

});