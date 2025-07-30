// Question 27: Alien Colors #3
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

enum AlienColor { Green = 'green', Yellow = 'yellow', Red = 'red' }

// Version 1: green
let alien_color: AlienColor = AlienColor.Green;
if (alien_color === AlienColor.Green) {
    console.log('Player earned 5 points.');
} else if (alien_color === AlienColor.Yellow) {
    console.log('Player earned 10 points.');
} else if (alien_color === AlienColor.Red) {
    console.log('Player earned 15 points.');
}

// Version 2: yellow
alien_color = AlienColor.Yellow;
if (alien_color === AlienColor.Green) {
    console.log('Player earned 5 points.');
} else if (alien_color === AlienColor.Yellow) {
    console.log('Player earned 10 points.');
} else if (alien_color === AlienColor.Red) {
    console.log('Player earned 15 points.');
}

// Version 3: red
alien_color = AlienColor.Red;
if (alien_color === AlienColor.Green) {
    console.log('Player earned 5 points.');
} else if (alien_color === AlienColor.Yellow) {
    console.log('Player earned 10 points.');
} else if (alien_color === AlienColor.Red) {
    console.log('Player earned 15 points.');
}
