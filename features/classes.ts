class Venicle {
  // public drive(): void {
  //   console.log('Driving')
  // }

  // constructor(color: string) {
  //   this.color = color;
  // }
  // color: string;

  constructor(public color: string) {
  }

  public stop(): void {
    console.log('Stopped')
  }

  protected beep(): void {
    console.log('beep');
  }
}

class Car extends Venicle {
  constructor(public wheels:number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Driving car');
  }

  startDriving(): void {
    this.drive();
    this.beep();
  }
}

const venicle = new Venicle('black');
console.log(venicle.color);
// venicle.drive();
// venicle.stop();

const car = new Car(4, 'white');
car.startDriving();
car.stop();