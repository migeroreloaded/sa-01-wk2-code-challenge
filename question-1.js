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

// Example usage
console.log(swapCase('The Quick Brown Fox'));