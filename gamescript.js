setTimeout(function() {
    document.getElementById("ready").innerHTML = "HERE WE GO!";
}, 1000)

setTimeout(function() {
    document.getElementById("ready").remove();
}, 3000)

// Display starting screen
setTimeout(function() {
    document.getElementById("gametable").style.display = 'block';
    document.getElementById("urgreen").style.display = 'block';
    document.getElementById("label").style.display = 'block';
    document.getElementById("nextRound").style.display = 'block';
    document.getElementById("wintable").style.display = 'block';

    let predictions = document.querySelectorAll('.predict');
    predictions.forEach(element => {
            element.style.display = 'inline-block';
        })


    // # hands still in for each player
    let p1wins = 0;
    let p2wins = 0;
    let p3wins = 0;
    let mainplayerwins = 0;

    // keep track of total # of thumbs
    let total = 0;
    // Create variable for guess and correct guesses
    let guess = 0;
    let thumbsup = 0;
    let thumbsupChosen = false;

    // Array for each player name for text stuff
    let player = ["Player 1's", "Player 2's", "Player 3's", "your"]
    // Array for name and score
    let playerScore = [
        { name: "Player 1's", wins: 0 },
        { name: "Player 2's", wins: 0 },
        { name: "Player 3's", wins: 0 },
        { name: "Your", wins: 0 }
    ];

    // for playerScore array
    let playerIndex = 0;

    // Array for random images to choose from
    let images = ["none-png.webp", "thumb up-png.png", "two thumbs.webp"]

    function calculateTotal() {
        total = 0;
        if (document.getElementById("p1image").src.split("/").pop() == "none-png.webp") {
            total = total;
            // alert("player1 =0");
        } else if (document.getElementById("p1image").src.split("/").pop() == "thumb%20up-png.png") {
            total = total + 1;
            // alert("player1 =1");
        } else if (document.getElementById("p1image").src.split("/").pop() == "two%20thumbs.webp") {
            total = total + 2;
            // alert("player1 =2");
        }
        //player2
        if (document.getElementById("p2image").src.split("/").pop() == "none-png.webp") {
            total = total;
        } else if (document.getElementById("p2image").src.split("/").pop() == "thumb%20up-png.png") {
            total = total + 1;
        } else if (document.getElementById("p2image").src.split("/").pop() == "two%20thumbs.webp") {
            total = total + 2;
        }
        //player3
        if (document.getElementById("p3image").src.split("/").pop() == "none-png.webp") {
            total = total;
        } else if (document.getElementById("p3image").src.split("/").pop() == "thumb%20up-png.png") {
            total = total + 1;
        } else if (document.getElementById("p3image").src.split("/").pop() == "two%20thumbs.webp") {
            total = total + 2;
        }
        //mainplayer
        if (document.getElementById("MPimage").src.split("/").pop() == "none-png.webp") {
            total = total;
        } else if (document.getElementById("MPimage").src.split("/").pop() == "thumb%20up-png.png") {
            total = total + 1;
        } else if (document.getElementById("MPimage").src.split("/").pop() == "two%20thumbs.webp") {
            total = total + 2;
        }
    }

    function checkGuess(playerwins) {
            if (guess == total) {
                    document.querySelector('#TorF').innerHTML = 'Correct guess!';
                    playerwins.wins++;
                    //alert("guess = " + guess);
                    //alert("total = " + total);
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
                    thumbsupChosen = true;
                    document.getElementById("nextRound").disabled = false;
            })
            document.getElementById("1thumb").addEventListener("click", function() {
                    thumbsup = 1;
                    document.getElementById("MPimage").src = images[thumbsup];
                    thumbsupChosen = true;
                    document.getElementById("nextRound").disabled = false;
            })
            document.getElementById("2thumbs").addEventListener("click", function() {
                    thumbsup = 2;
                    document.getElementById("MPimage").src = images[thumbsup];
                    thumbsupChosen = true;
                    document.getElementById("nextRound").disabled = false;
            })
    }

    function endGame() {
        if (playerScore[3].wins >= 2) {
                document.querySelector('#winner').innerHTML = 'You WIN!';
        } else {
                document.querySelector('#winner').innerHTML = 'You LOSE!';
        }
        document.getElementById("nextRound").disabled = true;
    }

    // function to play one round
    function generateImages() {
            // Choose random image for each player
            document.getElementById("p1image").src = images[Math.floor(Math.random() * images.length)];
            document.getElementById("p2image").src = images[Math.floor(Math.random() * images.length)];
            document.getElementById("p3image").src = images[Math.floor(Math.random() * images.length)];
    }

    // function to write out prediction on screen
    function guessClick(player) {
        document.getElementById("urpredict").innerHTML = player + " prediction: " + guess;
    }
    // choose your predictions
    function click0() {
        guess = 0;
        guessClick("Your");
    }
    function click1() {
        guess = 1;
        guessClick("Your");
    }
    function click2() {
        guess = 2;
        guessClick("Your");
    }
    function click3() {
        guess = 3;
        guessClick("Your");
    }
    function click4() {
        guess = 4;
        guessClick("Your");
    }
    function click5() {
        guess = 5;
        guessClick("Your");
    }
    function click6() {
        guess = 6;
        guessClick("Your");
    }
    function click7() {
        guess = 7;
        guessClick("Your");
    }
    function click8() {
        guess = 8;
        guessClick("Your");
    }

    function predict() {
        document.getElementById("0").addEventListener("click", click0)
        document.getElementById("1").addEventListener("click", click1)
        document.getElementById("2").addEventListener("click", click2)
        document.getElementById("3").addEventListener("click", click3)
        document.getElementById("4").addEventListener("click", click4)
        document.getElementById("5").addEventListener("click", click5)
        document.getElementById("6").addEventListener("click", click6)
        document.getElementById("7").addEventListener("click", click7)
        document.getElementById("8").addEventListener("click", click8)
    }

    function updateWinTable() {
        document.querySelector('#p1wins').innerHTML = playerScore[0].wins;
        document.querySelector('#p2wins').innerHTML = playerScore[1].wins;
        document.querySelector('#p3wins').innerHTML = playerScore[2].wins;
        document.querySelector('#urwins').innerHTML = playerScore[3].wins;

    }

    // Asked for help from AI for how to implement the player array with key:value pairs
    // Asked for help from AI for how to loop through cycles where each player gets a turn (help with logic)
    function runRound(playerIndex = 0) {
        if (playerScore.some(playeR => playeR.wins >= 2)) {
                endGame();
                return;
        }

        const currentPlayer = playerScore[playerIndex];
        document.querySelector('#playerturn').innerHTML = `It is ${currentPlayer.name} turn`;
        document.querySelector('#nextRound').innerHTML = `Check ${currentPlayer.name}'s prediction`;

        // Bot turns
        if (currentPlayer.name !== "Your") {
                thumbsupChosen = false;
                document.getElementById("nextRound").disabled = true;
                document.getElementById("0").disabled = true;
                document.getElementById("1").disabled = true;
                document.getElementById("2").disabled = true;
                document.getElementById("3").disabled = true;
                document.getElementById("4").disabled = true;
                document.getElementById("5").disabled = true;
                document.getElementById("6").disabled = true;
                document.getElementById("7").disabled = true;
                document.getElementById("8").disabled = true;
                // random guess
                guess = Math.floor(Math.random() * 9);
                chooseNumberThumbs();
                // write out current prediction
                guessClick(currentPlayer.name);
                // run game
                // help from AI on how to use onclick instead of a billion eventListeners
                document.getElementById("nextRound").onclick = () => {
                        if (!thumbsupChosen) {
                                alert("Please choose how many thumbs you're showing!");
                                return;
                        }
                        generateImages();
                        calculateTotal();
                        checkGuess(currentPlayer);
                        updateWinTable();
                        // This is part where AI used to help with how to wrap around to first player again after getting to the last player
                        // now playerIndex can go through 1,2,3,4 and then 1,2,3,4 again
                        setTimeout(function() {
                                runRound((playerIndex + 1) % playerScore.length)
                        }, 1000);
                };

        }
        // Run user turn
        else {
                thumbsupChosen = false;
                guess = 0;

                document.getElementById("0").disabled = false;
                document.getElementById("1").disabled = false;
                document.getElementById("2").disabled = false;
                document.getElementById("3").disabled = false;
                document.getElementById("4").disabled = false;
                document.getElementById("5").disabled = false;
                document.getElementById("6").disabled = false;
                document.getElementById("7").disabled = false;
                document.getElementById("8").disabled = false;
                predict();
                chooseNumberThumbs();

                document.getElementById("nextRound").onclick = () => {
                        if (!thumbsupChosen) {
                                alert("Please choose how many thumbs you're showing!");
                                return;
                        }
                        generateImages();
                        calculateTotal();
                        checkGuess(currentPlayer);
                        updateWinTable();
                        runRound((playerIndex + 1) % playerScore.length);
                };
        }
    }

    predict();
    chooseNumberThumbs();
    runRound();


}, 3000)
