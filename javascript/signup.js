console.log("JS Connected!");


function userSignup(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value.trim();
    var lastName = document.getElementById("lastName").value.trim();
    var userEmail = document.getElementById("userEmail").value.trim();
    var userPassword = document.getElementById("userPassword").value.trim();
    var confirmPassword = document.getElementById("confirmPassword").value.trim();

    if(firstName === "" || lastName === "" || userEmail === "" || userPassword === "" || confirmPassword === ""){
        alert("Please Fill All The Fields!")
    // }else if(!regex.test(userEmail)){
    //     alert("Please Enter Email In Correct Format\nFor Example: name@domain.com");
    }else if(confirmPassword !== userPassword){
        alert("Please Enter Correct Password In Confirm Password Section!");
    }else{
        localStorage.setItem("firstName" , firstName);
        localStorage.setItem("lastName" , lastName);
        localStorage.setItem("userEmail" , userEmail);
        localStorage.setItem("userPassword" , userPassword);
        localStorage.setItem("confirmPassword" , confirmPassword);
        window.location.href = "login.html"
    }
}