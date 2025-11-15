console.log("First Page!");

var verifyLogin = localStorage.getItem("userFound" , "true");

if(verifyLogin === "true"){
    signupDisplay.textContent = "Visiom AI"
    signupDisplay.href = "ai.html"
    signinDisplay.textContent = "Subscription"
    signinDisplay.href = "subscription.html"
}