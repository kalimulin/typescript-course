const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const cola: [string, boolean, number] = ['brown', true, 40];

// type alias
type Drink = [string, boolean, number];
const cola1: Drink = ['clear', false, 0];

const carSpecs: [number, number] = [400, 3354];
const carSpecsObj: {
  horcePower: 400,
  weight: 3354
}