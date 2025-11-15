console.log("Profile Page!");

// LocalStorage Item Get
var firstName = localStorage.getItem("firstName");
var lastName = localStorage.getItem("lastName");
var userName = firstName + " " + lastName;
var userSubscription = localStorage.getItem("userSubscription");
var planPrice = localStorage.getItem("planPrice");
var userEmail = localStorage.getItem("userEmail");
var memberSince = localStorage.getItem("memberSince");
var subscriptionDate = localStorage.getItem("subscriptionDate");
var subscriptionDateForExpire = new Date(subscriptionDate)
subscriptionDateForExpire.setDate(subscriptionDateForExpire.getDate() + 30);
var monthsName = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
var expiryMonth = monthsName[subscriptionDateForExpire.getMonth()];
var expiryDay = subscriptionDateForExpire.getDate();
var expiryYear = subscriptionDateForExpire.getFullYear();
var subscriptionExpire = expiryMonth + " " + expiryDay + ", " + expiryYear;


// Dynamic Display On Document!
var userNameDisplay = document.getElementById("userName").textContent = userName;
var userNameDis = document.getElementById("userNameDis").textContent = userName;
var userRole = document.getElementById("userRole").textContent = userSubscription;
var userEmailDisplay = document.getElementById("userEmailDisplay").textContent = userEmail;
var userContact = document.getElementById("userContact");
var memberSinceDisplay = document.getElementById("memberSinceDisplay").textContent = memberSince;
var planName = document.getElementById("planName").textContent = userSubscription;
var planPriceDisplay = document.getElementById("planPriceDisplay").textContent = planPrice;
var subscriptionStarted = document.getElementById("subscriptionStarted").textContent = subscriptionDate;
var nextBillingDate = document.getElementById("nextBillingDate").textContent = subscriptionExpire;
var subscriptionExpireDate = document.getElementById("subscriptionExpireDate").textContent = subscriptionExpire;

// Other Code!

if(userContact.textContent === ""){
    userContact.textContent = "Number Not Register"
}
var userFound = localStorage.getItem("userFound" , "true")
if(userFound !== "true"){
    alert("Please Login To Your Account First!");
    window.location.href = "login.html"
}

if(planName.textContent === ""){
    planName = "No Subscription Subscribed Yet Or Expire!";
}


function upgradePlan(){
    alert("Important Note Before Upgrading You Plan:\n\n.Your subscription operates on a pro-rated billing system to ensure fair and transparent charges. Any unused balance from your previous subscription period will be carried forward automatically and deducted from your next billing amount. You will only be charged for the remaining payable portion of your new subscription after subtracting your available balance. This ensures that you never lose unused subscription value, and you are never billed the full plan price if you still have credits remaining from your previous cycle. All adjustments are calculated automatically at the time of renewal to provide a seamless and accurate billing experience.");
    var whyChange = prompt("Why You Wanted To Change Subscription Plan!");
    if(!whyChange){
        alert("You Have To Enter Reason Must!");
        upgradePlan();
    };
};

function cancelSubscription(){
    alert("Important Note Before Canceling Subscription:\n\n.If you choose to cancel your subscription, any unused portion of your current plan will be automatically calculated and refunded to your original payment method. The refund amount is based on the remaining subscription period that has not been used at the time of cancellation. This ensures that you only pay for the services you have actually used, and any unused balance is promptly returned to your account without the need for a manual request. Refund processing is handled automatically to provide a smooth and transparent cancellation experience.");
    var cencelSubscriptionPrompt = prompt("Are You Sure To Cencel Subscription? Answer In\nYes OR No").toLowerCase();
    if(!cencelSubscriptionPrompt){
        alert("You Have To Answer It Must");
        cancelSubscription();
    }else if(cencelSubscriptionPrompt === "yes"){
        alert("Subscription Cancel Successfull\nRefund Have Been Sent.");
    }else if(cencelSubscriptionPrompt === "no"){
        alert("Thanks Your Subscription Is Not Cancel");
    }
}

console.log(planPrice);
