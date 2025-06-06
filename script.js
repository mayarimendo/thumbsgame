// CODE :D

// type out instructions
let text = "HOW TO PLAY: Each 'player' will take turns calling out the number of thumbs they predict will be up. When it's NOT your turn, select which thumbs you will have up. If the prediction matches the actual total number of thumbs up, the person whose turn it is will earn a win. The goal is to have no hands left in the game.";

let instructions = document.getElementById("instructions");

for (let i = 0; i < text.length; i++) {
        setTimeout(function() {
                instructions.textContent = instructions.textContent + text[i];
                }, 19*i);
}

function delay(miliseconds) {
        return new Promise(resolve => setTimeout(resolve, miliseconds));
}

// add event listener to click start button
let startButton = document.getElementById("start")

startButton.addEventListener("click", async function (){
        startButton.style.backgroundColor = "green";
        await delay(20);
        startButton.style.backgroundColor = "white";
        await delay(400);
})
