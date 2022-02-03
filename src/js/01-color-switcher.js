const refs = {
    "startBtn": document.querySelector("[data-start]"),
    "stopBtn": document.querySelector("[data-stop]"),
    "body" : document.querySelector("body")
    
}

refs.startBtn.addEventListener("click", () => {
    refs.startBtn.disabled = true;
    changeColor = setInterval(() => {
        refs.stopBtn.disabled = false;
        color = getRandomHexColor();
         console.log(color);
        refs.body.style.backgroundColor = color
    }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
    clearInterval(changeColor);
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}