// Question 41: Magicians
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Magicians

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

const magicians = ['Harry Houdini', 'David Blaine', 'Dynamo', 'Penn Jillette'];
show_magicians(magicians);
