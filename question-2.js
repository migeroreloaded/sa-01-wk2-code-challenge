const prompt = require('prompt-sync')();

// Function to prompt for input and ensure it's an integer
function promptInteger(message) {
    let input;
    do {
        input = prompt(message);
        // Try to parse the input as an integer, if successful, break the loop
        if (!isNaN(parseInt(input))) {
            break;
        } else {
            console.log("Invalid input! Please enter an integer.");
        }
    } while (true);
    return parseInt(input);
}

// Define a function called generateArray that takes two parameters
function generateArray(start, end) {
    // Initialize an empty array to store the generated sequence of numbers
    let array = [];
    // Check if the starting number is less than or equal to the ending number
    if (start <= end) {
        // If the starting number is less than or equal to the ending number,
        // Iterate from the starting number to the ending number
        for (let i = start; i <= end; i++) {
            // Push each number in the sequence to the array
            array.push(i);
        }
    } else {
        // If the starting number is greater than the ending number,
        // Iterate from the starting number to the ending number
        for (let i = start; i >= end; i--) {
            // Push each number in the sequence to the array
            array.push(i);
        }
    }
    // Return the generated array
    return array;
}

// Example usage with promptInteger
const start = promptInteger("Enter the starting number: ");
const end = promptInteger("Enter the ending number: ");
const generatedArray = generateArray(start, end);
console.log("Generated array:", generatedArray.join(', '));
