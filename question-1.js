const prompt = require('prompt-sync')();

// Define a function called swapCase that takes one parameter
function swapCase(inputString) {
    return inputString.split('').map(char => {
        // If character is uppercase, convert to lowercase; vice versa
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join(''); // Join the array of characters back into a string
}

// Example usage with prompt
const inputString = prompt("Enter a word/sentence to be cased swapped:");
const swapedCase = (swapCase(inputString));
console.log(`The Swaped case output is: ${swapedCase}`);