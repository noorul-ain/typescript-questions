// Question 44: Sandwiches
// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Sandwiches

function make_sandwich(...items: string[]): void {
    console.log('Making a sandwich with the following items:');
    for (let item of items) {
        console.log('- ' + item);
    }
    if (items.length === 0) {
        console.log('No items selected!');
    }
    console.log('Sandwich is ready!\n');
}

make_sandwich('Chicken', 'Lettuce', 'Tomato');
make_sandwich('Egg', 'Cheese');
make_sandwich('Peanut Butter', 'Jelly', 'Banana', 'Honey');
