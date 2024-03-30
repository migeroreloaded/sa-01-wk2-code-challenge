function generateArray(start, end) {
    let array = [];
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i--) {
            array.push(i);
        }
    }
    return array;
}

console.log(generateArray(4, 7)); // Output: [4, 5, 6, 7]
console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]