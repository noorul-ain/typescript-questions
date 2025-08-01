// Question 45: Cars
// Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
// Cars

function make_car(manufacturer: string, model: string, ...options: [string, any][]): object {
    let car: any = { manufacturer, model };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}

const car1 = make_car('Toyota', 'Corolla', ['color', 'red'], ['sunroof', true]);
const car2 = make_car('Honda', 'Civic', ['color', 'blue'], ['navigation', true]);

console.log(car1);
console.log(car2);
