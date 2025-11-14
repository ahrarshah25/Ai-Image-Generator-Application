console.log("First Page!");

var verifyLogin = localStorage.getItem("userFound" , "true");

if(verifyLogin === "true"){
    signinDisplay.innerHTML = `<a href="subscription.html" id="signinDisplay" class="btn btn-ghost">Subscription</a>`;
    signupDisplay.innerHTML = `<a href="ai.html" id="signupDisplay" class="btn btn-primary">Visiom AI</a>`;
}