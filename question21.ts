// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
interface City {
  name: string;
  country: string;
  population: number;
  famousFor: string;
}
const city: City = {
  name: "Lahore",
  country: "Pakistan",
  population: 11000000,
  famousFor: "Historical sites"
};
console.log(city); 