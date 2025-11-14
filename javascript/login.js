console.log("Login Page!");

function userLogin(event) {
    event.preventDefault()
    var userEmail = document.getElementById("userEmail").value.trim();
    var userPassword = document.getElementById("userPassword").value.trim();

    if(userEmail !== localStorage.getItem("userEmail") || userPassword !== localStorage.getItem("userPassword")){
        alert("Please Enter Correct Email & Password!")
    }else{
        localStorage.setItem("userFound" , "true");
        alert("Login Successfull!")
        window.location.href = "ai.html"
    }
}