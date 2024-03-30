function swapCase(inputString) {
    return inputString.split('').map(char => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('');
}

console.log(swapCase('The Quick Brown Fox'));