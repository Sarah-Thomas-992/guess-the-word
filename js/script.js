const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const progress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const lettersGuessed = [];
var remainingGuesses = 8;

const circleText = function (word) {
    const dotLetters = [];
    for (const dot of word) {
        console.log(dot);
        dotLetters.push("●");
    }
    progress.innerText = dotLetters.join("");
};

circleText(word);

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const entry = letterInput.value;
    const goodEntry = validLetter(entry);
    if (goodEntry) {
        makeGuess(entry);
    }
    letterInput.value = "";
});

const validLetter = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a value";
    } else if (input.length > 1) {
        message.innerText = "Please enter only one letter";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a valid letter";
    } else {
        return input;
    }
};

const makeGuess = function (letter) {
    letter = letter.toUpperCase();
    if (lettersGuessed.includes(letter)) {
        message.innerText = "You already guessed that letter. Try again!";
    } else {
        lettersGuessed.push(letter);
        countGuesses(letter);
        letterPrint(letter);
        console.log(lettersGuessed);
        printGuess(lettersGuessed);
    }
};

const letterPrint = function (print) {
    // guessedLetters.innerHTML = "";
    const li = document.createElement("li");
    li.innerText = print;
    guessedLetters.append(li);
};

const printGuess = function (lettersGuessed) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (lettersGuessed.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
    }
    progress.innerText = revealWord.join("");
    winner();
};

const countGuesses = function (guess) {
    const wordUpper = word.toUpperCase();
    if (!wordUpper.includes(guess)) {
        message.innerText = "Sorry, that letter isn't in the word.";
        remainingGuesses -= 1;
    } else if (wordUpper.includes(guess)) {
        message.innerText = "Correct! That letter is in the word!";
    };

    if (remainingGuesses === 0) {
        message.innerText = `Game over! Sorry! The word was ${word.toUpperCase()}`;
        remaining.classList.add("hide");
    } else if (remainingGuesses === 1) {
        remainingSpan.innerText = `${remainingGuesses} guess`;
    } else {
        remainingSpan.innerText = `${remainingGuesses} guesses`;
    }
};

const winner = function () {
    if (progress.innerText === word.toUpperCase()) {
        message.classList.add("win");
        message.innerHTML = '<p class="highlight">You guessed correct the word! Congrats!</p>';
    }
};


