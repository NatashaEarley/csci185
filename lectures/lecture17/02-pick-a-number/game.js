function generateRandomNumber(low, high) {
    const range = high - low + 1;
    const num = Math.floor(Math.random() * range) + low;
    return num;
}

const secret = generateRandomNumber(1, 100);
console.log(secret);

let numGuesses = 0;

// Your task:
function check() {
    const guess = Number(document.querySelector("#guess").value);
    const messageEl = document.querySelector("#message");
    const numGuessesEl = document.querySelector("#num_guesses")

    if (guess > secret) {
        messageEl.innerHTML = "Too High!";
    }

    if (guess < secret) {
        messageEl.innerHTML = "Too Low!";
    }

    if (guess === secret) {
        messageEl.innerHTML = "You Win!";
    }
    numGuesses = numGuesses + 1;
    numGuessesEl.innerHTML = numGuesses;
}
