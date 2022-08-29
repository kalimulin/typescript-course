let oranges = 5;
let speed = 'fast';

let hasDog = true;

let nothing = null;
let nothing1 = undefined;

// bult-in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue', 'white'];
let numbers: number[] = [0, 1, 2, 4, 8, 16];
let results: boolean[] = [true, false];

// classes
class Car {}

let car: Car = new Car();

// object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}