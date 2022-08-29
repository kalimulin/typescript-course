// type inference (вывод типов) - typescript самостоятельно устанавливает  тип переменной
let oranges = 5;
let speed = 'fast';

let hasDog = true;

// type annotations (аннотации типов) - указываем тип переменной явно
// успользуется  когда переменная инициализируется не в момент объявления,
// когда вывод о типе переменной не может быть сделан автоматически
// когда функция возвращает any и нам нужно уточнить тип
let nothing: null = null;
let nothing1: undefined = undefined;

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