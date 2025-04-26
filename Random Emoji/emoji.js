let button = document.querySelector("button");
emojis = ["🥰", "😘", "🙂", "😀", "🤗", "🤭", "☹️", "🥺", "🤕", "☺️", "🫣", "😀", "😍", "😘", "🥰", "😋", "🤣", "😎"];

function changeEmoji() {
    button.innerText = emojis[Math.floor(Math.random() * emojis.length)];
}

button.addEventListener("mouseover", changeEmoji);     // for desktop
button.addEventListener("touchstart", changeEmoji);    // for mobile
