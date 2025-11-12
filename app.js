async function generateImage() {
    var userInput = document.getElementById("userInput").value.trim();
    if (!userInput) return alert("Please enter something.");

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
                    <a id="downloadBtn" href="${image}" download="ai-image.jpg">Download</a>
                `;
        } else {
            imageContainer.innerHTML = `<p>No image found.</p>`;
        }
    } catch (error) {
        imageContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}