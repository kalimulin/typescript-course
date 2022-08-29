const values: string[] = [];

const colors1 = ['blue', 'violet', 'white'];

const dates = [new Date(), new Date()];

const fruitsByColor = [
  ['tomatto'],
  ['apple'],
  ['lemon']
];

const fruitsByColor1: string[][] = [];

// help with inference when extracting values
const color = colors1[0];
const color1 = colors1.pop();

// help with 'map'
colors.map((color: string): string => {
  return color;
});

// flexible types

const importantDates = [new Date(), '2021-11-11'];

const importantDates1: (Date | string)[] = [new Date()];
importantDates1.push('2000-12-12');