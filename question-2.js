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

// Example usage with prompt
const start = parseInt(prompt("Enter the starting number:"));
const end = parseInt(prompt("Enter the ending number:"));
console.log(generateArray(start, end));