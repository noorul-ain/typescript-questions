// Question 22: Intentional Error
// If you haven’t received an array index error in one of your programs yet, try to make one happen.
// Change an index in one of your programs to produce an index error.
// Make sure you correct the error before closing the program.
//
// Note: In JavaScript/TypeScript, accessing an out-of-bounds index returns undefined, not an error, but this demonstrates the concept.
// Intentional Error: Array Index Error Example

// Create an array with 3 elements
let numbers = [1, 2, 3];

// Intentionally access an out-of-bounds index (will be undefined in JS/TS, not an error, but demonstrates the issue)
console.log('Accessing index 5 (should be undefined):', numbers[5]);

// Correction: Access a valid index
console.log('Accessing index 2 (should be 3):', numbers[2]);
