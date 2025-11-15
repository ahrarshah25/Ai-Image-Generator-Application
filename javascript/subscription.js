console.log("Subscription Page!");


var verifyLogin = localStorage.getItem("userFound");
if(verifyLogin === "true"){
    signupDisplay.textContent = "Visiom AI"
    signupDisplay.href = "ai.html"
    signinDisplay.textContent = "Profile"
    signinDisplay.href = "profile.html"
}


function basicSubscription(){
    var subscriptionName = "Basic Plan";
    var userFound = localStorage.getItem("userFound")
    if(userFound !== "true"){
        alert("Please Login To Your Account First!");
        window.location.href = "login.html"
    }else{
        localStorage.setItem("subscription" , subscriptionName);
        window.location.href = "checkout.html"
    };
};

function professionalSubscription(){
    var subscriptionName = "Premium Plan";
    var userFound = localStorage.getItem("userFound")
    if(userFound !== "true"){
        alert("Please Login To Your Account First!");
        window.location.href = "login.html"
    }else{
        localStorage.setItem("subscription" , subscriptionName);
        window.location.href = "checkout.html";
    };
};

function enterpriseSubscription(){
    var subscriptionName = "Enterprise Plan";
    var userFound = localStorage.getItem("userFound")
    if(userFound !== "true"){
        alert("Please Login To Your Account First!");
        window.location.href = "login.html"
    }else{
        localStorage.setItem("subscription" , subscriptionName);
        window.location.href = "checkout.html";
    };
};