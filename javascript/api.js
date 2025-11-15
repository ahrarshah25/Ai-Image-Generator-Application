console.log("API Page!");


var enterpriseSubscription = localStorage.getItem("enterpriseSubscription");
if(enterpriseSubscription !== "true"){
    alert("You Havent Subscribed Enterprise Subscription\nAPI Is Only Available On Enterprise Subscription")
    window.location.href = "index.html"
}
