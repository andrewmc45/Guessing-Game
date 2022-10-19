/* Guessing game: Ask the user for a number between
1 and 10. They get 5 guesses.
Let them know whether they guessed correctly.
Tell them if they were too high or too low.

Make sure they enter a number between 1 and 10.
If they enter something other than that,
ask them to try again and not count the incorrect 
submission as a guess.
*/ 

const rls = require('readline-sync');

const SECRET_NUM = Math.ceil(Math.random()*10);
const MAX_GUESSES = 5;
let guessesSoFar = 0;
let wonGame = false;

while(guessesSoFar < MAX_GUESSES && !wonGame)
{
    // keep asking until they give us a number between 1 and 10

    let currentGuess = rls.question("Please enter a number between 1 and 10: ");
    
    // check if it's not a number OR if it's out of range. If either of those are the 
    // case ask again
    while (isNaN(currentGuess) || currentGuess > 10 || currentGuess < 1)
    {
        currentGuess = rls.question("Sorry, that's not valid input.\nPlease enter a number between 1 and 10: ")
    }
    
    // at this point, we know the guess is a number so we convert it
    currentGuess = parseInt(currentGuess);

    if(currentGuess == SECRET_NUM)
    {
        console.log("Nice work! You guessed correctly!");
        wonGame = true;
        break;
    }
    else
    {
        if(currentGuess > SECRET_NUM)
        {
            console.log("Your guess is too high!");
        }
        else
        {
            console.log("Your guess is too low!");
        }
    }

    guessesSoFar++;
    console.log("You have", MAX_GUESSES-guessesSoFar, "guesses left.");
}