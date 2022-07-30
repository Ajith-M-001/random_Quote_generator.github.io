const quoteText = document.querySelector(".quote");
let authorName = document.querySelector(".author")
var quotebtn = document.querySelector("button");
let soundbtn = document.querySelector(".sound")
let copybtn = document.querySelector(".copy")
let twitterbtn = document.querySelector(".twitter")

function randomQuote() {
    quotebtn.classList.add("loading")
    quotebtn.innerText = "loadindg Quote..";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result)
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quotebtn.innerText = "New Quote"
        quotebtn.classList.remove("loading")
    });
}


soundbtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copybtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText)
});

twitterbtn.addEventListener("click", () => {
    let tweeturl = `http://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweeturl, "_blank");
});


quotebtn.addEventListener("click", randomQuote);
