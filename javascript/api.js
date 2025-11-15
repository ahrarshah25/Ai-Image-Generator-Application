console.log("API Page!");


var enterpriseSubscription = localStorage.getItem("userSubscription");
if(enterpriseSubscription !== "Enterprise Plan"){
    alert("You Havent Subscribed Enterprise Subscription\nAPI Is Only Available On Enterprise Subscription")
    window.location.href = "index.html"
}
