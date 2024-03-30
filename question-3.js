// Define a function called isPrime that takes one parameter
function isPrime(num) {
    // Check if the number is less than or equal to 1, as numbers less than or equal to 1 are not prime
    if (num <= 1) return false;
    // Check if the number is 2 or 3, as they are prime numbers
    if (num <= 3) return true;
    // Check if the number is divisible by 2 or 3, as even numbers greater than 2 and multiples of 3 are not prime
    if (num % 2 === 0 || num % 3 === 0) return false;
    // Check divisibility by numbers of the form 6k ± 1, where k is an integer
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    // If the number passes all the above conditions, it is prime
    return true;
}

function getPrimeNumbers(array) {
    // Filter the array to keep only prime numbers using the isPrime function
    return array.filter(num => isPrime(num));
}

// Example usage with prompt
const inputArray = prompt("Enter numbers separated by commas: e.g. 1,2,3,4,5,6,7...").split(',').map(Number);
const primes = getPrimeNumbers(inputArray);
alert("Prime numbers in the input array are: " + primes.join(', '));