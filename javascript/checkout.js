console.log("Checkout Page");

var subscriptionName = localStorage.getItem("subscription");
var imagesAllowed = document.getElementById("imagesAllowed");
var gbAllowed = document.getElementById("gbAllowed");
var emailSupport = document.getElementById("emailSupport");
var imageQuality = document.getElementById("imageQuality");
var templatesType = document.getElementById("templatesType");
var appendForPremium = document.getElementById("appendForPremium");
var planPrice = document.getElementById("planPrice");
var nameOfPlan = document.getElementById("nameOfPlan");
var payPrice = document.getElementById("payPrice");
var apiAccess = document.getElementById("apiAccess");

var planName = document.getElementById("planName");
planName.textContent = subscriptionName;

if (planName.textContent === "Basic Plan") {
    imagesAllowed.textContent = "50 AI Images";
    gbAllowed.textContent = "25 GB Storage";
    emailSupport.textContent = "Email Support";
    imageQuality.textContent = "Standard Quality";
    templatesType.textContent = "Basic Templates";
    planPrice.textContent = "399 PKR";
    payPrice.textContent = "399 PKR";
    localStorage.setItem("planPrice", "399 PKR");
    nameOfPlan.textContent = planName.textContent;
} else if (planName.textContent === "Premium Plan") {
    imagesAllowed.textContent = "200 AI Images";
    gbAllowed.textContent = "100 GB Storage";
    emailSupport.textContent = "Email Support";
    imageQuality.textContent = "HD Quality";
    templatesType.textContent = "Premium Templates";
    planPrice.textContent = "799 PKR";
    payPrice.textContent = "799 PKR";
    localStorage.setItem("planPrice", "799 PKR");
    var div = document.createElement("div");
    div.className = "feature-item"
    div.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span id="templatesType">Advanced Editing Tools</span>
                                    `;
    appendForPremium.appendChild(div);
} else if (planName.textContent === "Enterprise Plan") {
    imagesAllowed.textContent = "Unlimited AI Images";
    gbAllowed.textContent = "500 GB Storage";
    emailSupport.textContent = "24/7 Support";
    imageQuality.textContent = "4K Quality";
    templatesType.textContent = "All Templates & Tools";
    // apiAccess.style.display = "block"
    planPrice.textContent = "1,999 PKR";
    payPrice.textContent = "1,999 PKR";
    localStorage.setItem("planPrice", "1,999 PKR");
    var div = document.createElement("div");
    div.className = "feature-item"
    div.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span id="templatesType">Custom Training</span>
                                    `;

    var div2 = document.createElement("div");
    div2.className = "feature-item"
    div2.innerHTML = `
    <br>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span id="templatesType">API Access</span>
                                    `;
    appendForPremium.appendChild(div);
    appendForPremium.appendChild(div2);
}


// object
// var monthlyDiscount = {
//     name:nameOfPlan.textContent,
//     price:parseFloat(planPrice.textContent),
//     discountMonths:[0,11,12,8],
//     calculateAnnual: function(percentIfDicsount){
//         var bestPrice = this.price;
//         var currentDate = new Date();
//         var thisMonth = currentDate.getMonth();

//         for(var i = 0; i < this.discountMonths.length;i++){
//             if(this.discountMonths[i] === thisMonth){
//                 bestPrice = this.price * percentIfDicsount;
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     }
// }

// var annual = monthlyDiscount.calculateAnnual(.50)
// console.log(annual);


function completeOrder(event) {
    event.preventDefault();
    var cardExpiryDate = document.getElementById("cardExpiryDate").value.trim();
    var cardNumber = document.getElementById("cardNumber").value.trim();
    var cardCvv = document.getElementById("cardCvv").value.trim();
    var cardholderName = document.getElementById("cardholderName").value.trim();

    if (cardExpiryDate === "" || cardNumber === "" || cardCvv === "" || cardholderName === "") {
        alert("Please Fill All The Feilds To Checkout!")
    } else if (cardNumber < 16) {
        alert("Please Enter Correct Card Number!");
    } else if (cardCvv < 3) {
        alert("Please Enter Correct Card CVV");
    } else {
        alert("Subscription Successfull Subscribed!\nYour Subscription Is " + nameOfPlan.textContent);
        localStorage.setItem("userSubscription", nameOfPlan.textContent);
        var monthsName = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
        var date = new Date();
        var currentMonth = date.getMonth();
        var month = monthsName[currentMonth];
        var day = date.getDate()
        var fullYear = date.getFullYear()
        var subscriptionDate = month + " " + day + ", " + fullYear;
        localStorage.setItem("subscriptionDate" , subscriptionDate);
        window.location.href = "profile.html";
    }
}
