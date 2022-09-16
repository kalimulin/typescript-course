interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const cola = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Cola has ${this.sugar} grams of sugar`;
  }
}

const printSummary = (venicle: Reportable): void => {
  console.log(venicle.summary());
}

printSummary(oldCivic);
printSummary(cola);