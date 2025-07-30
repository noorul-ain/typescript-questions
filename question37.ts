// Question 37: Large Shirts
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt size: ${size}, Message: "${message}"`);
}

make_shirt(); // Large, default message
make_shirt('Medium'); // Medium, default message
make_shirt('Small', 'TypeScript is powerful!'); // Small, custom message
