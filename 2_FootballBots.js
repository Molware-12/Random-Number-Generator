// generates a random number between 1 and 100
function randomNumber() {
    return Math.floor(Math.random() * 100);
}

// gunction for the easy mode of the game
function easyMode() {
    // Hides the game element with the "game" class
    document.querySelector(".game").style.display = "none";
    
    // generates a random number and sets the initial number of lives to 10
    var num = randomNumber();
    var lives = 10;

    // loops until the player runs out of lives or guesses the correct number
    while (lives > 0) {
        // Prompts the user to enter a guess and converts it to an integer
        let guess = parseInt(prompt(`What number am I thinking of from 1-100? You have ${lives} lives.`));

        // Checks if the guess is too high
        if (guess > num) {
            lives -= 1;
            alert(`Too high, ${guess} is incorrect. ${lives} lives left.`);
        } 
        // Checks if the guess is too low
        else if (guess < num) {
            lives -= 1;
            alert(`Too low, ${guess} is incorrect. ${lives} left.`);
        }
        // Checks if the guess is correct
        else if (guess == num) {
            alert(`${guess} is correct! Congratulations!`);
            break;
        }

        // Displays a message if the player runs out of lives
        if (lives == 0) {
            alert(`You have ${lives} left, you lose.`);
        }
    }
}

function hardMode() {
    document.querySelector(".game").style.display = "none";
    
    // Same function as easyMode but num generates a random number and sets the initial number of lives to 5
    var num = randomNumber();
    var lives = 5;

    while (lives > 0) {
        let guess = parseInt(prompt(`What number am I thinking of from 1-100? You have ${lives} lives.`));

        if (guess > num) {
            lives -= 1;
            alert(`Too high, ${guess} is incorrect. ${lives} lives left.`);
        } 
        else if (guess < num) {
            lives -= 1;
            alert(`Too low, ${guess} is incorrect. ${lives} lives left.`);
        }
        else if (guess == num) {
            alert(`${guess} is correct! Congratulations!`);
            break;
        }

        if (lives == 0) {
            alert(`You have ${lives} left, you lose.`);
        }
    }
}
