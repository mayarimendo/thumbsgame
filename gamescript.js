setTimeout(function() {
    document.getElementById("ready").innerHTML = "HERE WE GO!";
}, 1500);

setTimeout(function() {
    document.getElementById("ready").remove();
}, 3000);

// Display starting screen
setTimeout(function () {
    document.getElementById("gametable").style.display ='block';
    document.getElementById("urgreen").style.display = 'block';
    document.getElementById("label").style.display = 'block';
    document.getElementById("nextRound").style.display = 'block';
    document.getElementById("wintable").style.display = 'block';

    let predictions = document.querySelectorAll('.predict');
    predictions.forEach(element => {
            element.style.display = 'inline-block';
    })


    // # hands still in for each player
    let p1hands = 2;
    let p2hands = 2;
    let p3hands = 2;
    let mainplayerhands = 2;

    // keep track of total # of thumbs
    let total = 0;
    // Create variable for guess and correct guesses
    let correct = 0;
    let guess = 8;
    let thumbsup = 0;

    // Array for hands score (manipulatable for calculations)
    let handsleft = [p1hands, p2hands, p3hands, mainplayerhands];

    // Array for each player's wins
    let wins = []

    // Array for random images to choose from
    let images = ["none-png.webp", "thumb up-png.png", "two thumbs.webp"]

    function calculateTotal() {
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
    }

    function checkGuess(playerhands) {
            if (guess == total) {
                    document.querySelector('#TorF').innerHTML = 'Correct guess!';
                    playerhands = playerhands - 1;
                    handsleft = [p1hands, p2hands, p3hands, mainplayerhands];
                    correct = correct + 1;


                    //update table. consider usage/purpose of 'correct'


                    // document.querySelector('#TorF').innerHTML = 'Correct guess!';






            }
            else {
                    document.querySelector('#TorF').innerHTML = 'Better luck next round!';
            }
            // alert("checkGuess is called");
    }

    function chooseNumberThumbs() {
            document.getElementById("0thumbs").addEventListener("click", function() {
                    thumbsup = 0;
                    document.getElementById("MPimage").src = images[thumbsup];
            })
            document.getElementById("1thumb").addEventListener("click", function() {
                    thumbsup = 1;
                    document.getElementById("MPimage").src = images[thumbsup];
            })
            document.getElementById("2thumbs").addEventListener("click", function() {
                    thumbsup = 2;
                    document.getElementById("MPimage").src = images[thumbsup];
            })
    }

    // function to play one round
    function generateImages() {
            // change value of guess and see if it matches the total
            let buttonClicked = false;

            // Choose random image for each player
            document.getElementById("p1image").src = images[Math.floor(Math.random() * images.length)];
            document.getElementById("p2image").src = images[Math.floor(Math.random() * images.length)];
            document.getElementById("p3image").src = images[Math.floor(Math.random() * images.length)];
    }


    document.getElementById("0").addEventListener("click", function() {
            guess = 0;
            document.getElementById("urpredict").innerHTML = "Your prediction: " + guess;
    })
    document.getElementById("1").addEventListener("click", function() {
            guess = 1;
            document.getElementById("urpredict").innerHTML = "Your prediction: " + guess;
    })
    document.getElementById("2").addEventListener("click", function() {
            guess = 2;
            document.getElementById("urpredict").innerHTML = "Your prediction: " + guess;
    })
    document.getElementById("3").addEventListener("click", function() {
            guess = 3;
            document.getElementById("urpredict").innerHTML = "Your prediction: " + guess;
    })
    document.getElementById("4").addEventListener("click", function() {
            guess = 4;
            document.getElementById("urpredict").innerHTML = "Your prediction: " + guess;
    })
    document.getElementById("5").addEventListener("click", function() {
            guess = 5;
            document.getElementById("urpredict").innerHTML = "Your prediction: " + guess;
    })
    document.getElementById("6").addEventListener("click", function() {
            guess = 6;
            document.getElementById("urpredict").innerHTML = "Your prediction: " + guess;
    })
    document.getElementById("7").addEventListener("click", function() {
            guess = 7;
            document.getElementById("urpredict").innerHTML = "Your prediction: " + guess;
    })
    document.getElementById("8").addEventListener("click", function() {
            guess = 8;
            document.getElementById("urpredict").innerHTML = "Your prediction: " + guess;
    })





    while (mainplayerhands > 0 || p1hands > 0 || p2hands > 0 || p3hands > 0) {
        for (let i=0; i < 4; i++;) {

            // change to say whose turn it is id="playerturn" need to make array with player names

            chooseNumberThumbs();
            document.getElementById("nextRound").addEventListener("click", function() {
                    generateImages();
                    calculateTotal();
                    checkGuess(mainplayerhands);
                    // alert(total);

                    document.getElementById("correct").innerHTML = "Correct guesses: " + correct;

                    if (mainplayerhands == 0) {
                            document.querySelector('#winner').innerHTML = 'You WIN!';
                    }
                    else if (p1hands == 0 || p2hands == 0 || p3hands == 0) {
                            document.querySelector('#winner').innerHTML = 'You LOSE!';
                    }
            })
        }
    }

}, 4300)
