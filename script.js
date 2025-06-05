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

        //WHEN BUTTON CLICKED: clear screen
        document.querySelector("table").remove();
        document.getElementById("start").remove();
        document.getElementById("instructions").remove();

        // innerhtml to display "READY?" "HERE WE GO!"
        document.getElementById("ready").textContent = "READY?";
        await delay(1500);
        document.getElementById("ready").textContent = "HERE WE GO!";
        await delay(1200);

        document.getElementById("ready").remove();
        await delay(2000);

        // Display starting screen
        document.getElementById("gametable").style.display ='block';
        document.getElementById("urgreen").style.display = 'block';
        document.getElementById("label").style.display = 'block';
        document.getElementById("nextRound").style.display = 'block';

        let predictions = document.querySelectorAll('.predict');
        predictions.forEach(element => {
                element.style.display = 'block';
        })


        // # hands still in for each player
        let p1hands = 2;
        let p2hands = 2;
        let p3hands = 2;
        let mainplayerhands = 2;

        // keep track of total # of thumbs
        let total = 0;
        // Create variable for guess
        // let guess = 0;

        // Array for random images to choose from
        let images = ["none-png.webp", "thumb up-png.png", "two thumbs.webp"]


        function checkGuess() {
                if (guess == total) {
                        document.querySelector('#TorF').innerHTML = 'Correct guess!';
                        mainplayerhands = mainplayerhands - 1;
                        correct = correct + 1;
                }
                else {
                        document.querySelector('#TorF').innerHTML = 'Better luck next round!';
                }
                // alert("checkGuess is called");
        }

        // function to play one round
        function round() {
                // change value of guess and see if it matches the total
                let buttonClicked = false;

                // Choose random image for each player
                document.getElementById("p1image").src = images[Math.floor(Math.random() * images.length)];
                document.getElementById("p2image").src = images[Math.floor(Math.random() * images.length)];
                document.getElementById("p3image").src = images[Math.floor(Math.random() * images.length)];
                document.getElementById("MPimage").src = images[Math.floor(Math.random() * images.length)];
        }
        let correct = 0;
        let guess = 8;

        document.getElementById("0").addEventListener("click", function() {
                guess = 0;
                document.getElementById("urpredict").innerHTML = "Your prediction:" + guess;
        })
        document.getElementById("1").addEventListener("click", function() {
                guess = 1;
                document.getElementById("urpredict").innerHTML = "Your prediction:" + guess;
        })
        document.getElementById("2").addEventListener("click", function() {
                let guess = 2;
                document.getElementById("urpredict").innerHTML = "Your prediction:" + guess;
        })
        document.getElementById("3").addEventListener("click", function() {
                guess = 3;
                document.getElementById("urpredict").innerHTML = "Your prediction:" + guess;
        })
        document.getElementById("4").addEventListener("click", function() {
                guess = 4;
                document.getElementById("urpredict").innerHTML = "Your prediction:" + guess;
        })
        document.getElementById("5").addEventListener("click", function() {
                guess = 5;
                document.getElementById("urpredict").innerHTML = "Your prediction:" + guess;
        })
        document.getElementById("6").addEventListener("click", function() {
                guess = 6;
                document.getElementById("urpredict").innerHTML = "Your prediction:" + guess;
        })
        document.getElementById("7").addEventListener("click", function() {
                guess = 7;
                document.getElementById("urpredict").innerHTML = "Your prediction:" + guess;
        })
        document.getElementById("8").addEventListener("click", function() {
                guess = 8;
                document.getElementById("urpredict").innerHTML = "Your prediction: " + guess;
        })

        document.getElementById("nextRound").addEventListener("click", function() {
                round();
                total = 0;
                if (document.getElementById("p1image").src.split("/").pop() == "none-png.webp") {
                        total = total;
                        // alert("player1 =0");
                }
                else if (document.getElementById("p1image").src.split("/").pop() == "thumb%20up-png.png") {
                        total = total + 1;
                        // alert("player1 =1");
                }
                else if (document.getElementById("p1image").src.split("/").pop() == "two%20thumbs.webp") {
                        total = total + 2;
                        // alert("player1 =2");
                }
                //player2
                if (document.getElementById("p2image").src.split("/").pop() == "none-png.webp") {
                        total = total;
                }
                else if (document.getElementById("p2image").src.split("/").pop() == "thumb%20up-png.png") {
                        total = total + 1;
                }
                else if (document.getElementById("p2image").src.split("/").pop() == "two%20thumbs.webp") {
                        total = total + 2;
                }
                //player3
                if (document.getElementById("p3image").src.split("/").pop() == "none-png.webp") {
                        total = total;
                }
                else if (document.getElementById("p3image").src.split("/").pop() == "thumb%20up-png.png") {
                        total = total + 1;
                }
                else if (document.getElementById("p3image").src.split("/").pop() == "two%20thumbs.webp") {
                        total = total + 2;
                }
                //mainplayer
                if (document.getElementById("MPimage").src.split("/").pop() == "none-png.webp") {
                        total = total;
                }
                else if (document.getElementById("MPimage").src.split("/").pop() == "thumb%20up-png.png") {
                        total = total + 1;
                }
                else if (document.getElementById("MPimage").src.split("/").pop() == "two%20thumbs.webp") {
                        total = total + 2;
                }
                checkGuess();
                // alert(total);

                // assign number values to each image
                //player1

                //alert(document.getElementById("p1image").src.split("/").pop());

                document.getElementById("correct").innerHTML = "Correct guesses: " + correct;

                if (mainplayerhands == 0) {
                        document.querySelector('#winner').innerHTML = 'You WIN!';
                }
                else if (p1hands == 0 || p2hands == 0 || p3hands == 0) {
                        document.querySelector('#winner').innerHTML = 'You LOSE!';
                }
        })
})

