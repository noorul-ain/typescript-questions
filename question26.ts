// Question 26: Alien Colors #2
// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.

// Version where if block runs
enum AlienColor { Green = 'green', Yellow = 'yellow', Red = 'red' }
let alien_color: AlienColor = AlienColor.Green;
if (alien_color === AlienColor.Green) {
    console.log('Player just earned 5 points for shooting the alien.');
} else {
    console.log('Player just earned 10 points.');
}

// Version where else block runs
alien_color = AlienColor.Yellow;
if (alien_color === AlienColor.Green) {
    console.log('Player just earned 5 points for shooting the alien.');
} else {
    console.log('Player just earned 10 points.');
}
