// Question 24: More Conditional Tests
// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// Equality and inequality with strings
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.", fruit == 'apple');
console.log("Is fruit != 'banana'? I predict True.", fruit != 'banana');
console.log("Is fruit == 'banana'? I predict False.", fruit == 'banana');
console.log("Is fruit != 'apple'? I predict False.", fruit != 'apple');

// Using lower case function
let city = 'Karachi';
console.log("Is city.toLowerCase() == 'karachi'? I predict True.", city.toLowerCase() == 'karachi');
console.log("Is city.toLowerCase() == 'LAHORE'? I predict False.", city.toLowerCase() == 'LAHORE');

// Numerical tests
testNum = 10;
console.log("Is testNum == 10? I predict True.", testNum == 10);
console.log("Is testNum != 5? I predict True.", testNum != 5);
console.log("Is testNum > 5? I predict True.", testNum > 5);
console.log("Is testNum < 5? I predict False.", testNum < 5);
console.log("Is testNum >= 10? I predict True.", testNum >= 10);
console.log("Is testNum <= 9? I predict False.", testNum <= 9);

// Using "and" and "or" operators
console.log("Is testNum > 5 && testNum < 15? I predict True.", testNum > 5 && testNum < 15);
console.log("Is testNum < 5 || testNum > 15? I predict False.", testNum < 5 || testNum > 15);

// Test whether an item is in an array
let fruits = ['apple', 'banana', 'cherry'];
console.log("Is 'banana' in fruits? I predict True.", fruits.includes('banana'));
console.log("Is 'mango' in fruits? I predict False.", fruits.includes('mango'));

// Test whether an item is not in an array
console.log("Is 'mango' not in fruits? I predict True.", !fruits.includes('mango'));
console.log("Is 'apple' not in fruits? I predict False.", !fruits.includes('apple'));
