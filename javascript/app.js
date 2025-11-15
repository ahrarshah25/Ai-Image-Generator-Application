console.log("Ai Page!");

var verifyLogin = localStorage.getItem("userFound");
var userSubscription = localStorage.getItem("userSubscription");
if(verifyLogin !== "true"){
    alert("Please Login To Your Account First!");
    window.location.href = "login.html";
}else if(userSubscription === "false"){
    alert("Support Message:\nPlease Subscribe To Any Subscription First To Use This Ai.");
    window.location.href = "subscription.html"
} 



var imageContainer = document.getElementById("imageContainer")
var chatList = document.getElementById("chatList");
var chats = JSON.parse(localStorage.getItem("chats")) || [];
var currentChat = null;


function renderChats() {
    chatList.innerHTML = "";
    for (var i = 0; i < chats.length; i++) {
        var chat = chats[i];
        var newDiv = document.createElement("div");
        newDiv.className = "chat-item" + (currentChat === i ? " active" : "");
        newDiv.textContent = chat.title;

        newDiv.onclick = function (index) {
            return function () {
                loadChat(index);
            }
        }(i);
        chatList.appendChild(newDiv);
    }
};

function loadChat(index) {
    currentChat = index;
    var chat = chats[index];

    document.getElementById("userInput").value = chat.title;
    imageContainer.innerHTML = `
    <img src="${chat.image}" alt="${chat.title}">
    <a id="downloadBtn"  href="${chat.image}" download="ai-image.jpg">Download</a>`

    renderChats()
}


function newChat() {
    currentChat = null;
    document.getElementById("userInput").value = "";
    imageContainer.innerHTML = "";
    renderChats();
}

async function generateImage() {
    var userInput = document.getElementById("userInput").value.trim();
    if (!userInput) {
        return alert("Please enter something.");
    }

    imageContainer.innerHTML = `<p>Generating image...</p>`;

    try {
        var apiKey = `https://api.unsplash.com/search/photos?query=${userInput}&per_page=1&client_id=bUt4YHbchnID8kRrAYSUM10HmSBjFua9STqY491FAV0`;
        var response = await fetch(apiKey);
        if (!response.ok) throw new Error("API Error");

        var data = await response.json();
        console.log(data);

        if (data.results.length > 0) {
            var image = data.results[0].urls.small;
            imageContainer.innerHTML = `
                    <img src="${image}" alt="${userInput}">
                    <a id="downloadBtn" class="download-btn" href="${image}" download="ai-image.jpg">Download</a>
                `;

            var newChat = { title: userInput, image: image };
            chats.push(newChat);
            localStorage.setItem("chats", JSON.stringify(chats));

            currentChat = chats.length - 1;
            renderChats();
        } else {
            imageContainer.innerHTML = `<p>No image found.</p>`;
        }
    } catch (error) {
        imageContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

renderChats()


function deleteChat() {
    var chats = JSON.parse(localStorage.getItem("chats")) || [];
    alert("All Chats Deleted!");
    chats = localStorage.setItem("chats", JSON.stringify([]));
    window.location.reload();
}