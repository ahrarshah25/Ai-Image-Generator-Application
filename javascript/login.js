const { use } = require("react");

console.log("Login Page!");

function userLogin(event) {
    event.preventDefault();

    var userEmail = document.getElementById("userEmail").value.trim();
    var userPassword = document.getElementById("userPassword").value.trim();
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(userEmail !== localStorage.getItem("userEmail") || userPassword !== localStorage.getItem("userPassword")){
        alert("Please Enter Correct Email & Password!")
    }else if(!regex.test(userEmail)){
        alert("Please Enter Email In Correct Format\nFor Example: name@domain.com");
    }else{
        localStorage.setItem("userFound" , "true");
        alert("Login Successfull!")
        window.location.href = "ai.html"
    }
}