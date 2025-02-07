class Car {
  #brand;
  #model;
  #speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    console.log(
      `${this.#brand} ${this.#model}, Speed: ${this.#speed} km/h, isTrunkOpen: ${this.isTrunkOpen}`
    );
  }

  go() {
    if (this.#speed + 5 <= 200) {
      this.#speed += 5;
    } else {
      this.#speed = 200;
    }
  }

  brake() {
    if (this.#speed - 5 >= 0) {
      this.#speed -= 5;
    } else {
      this.#speed = 0;
    }
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails, acceleration) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    if (this.speed + this.acceleration <= 300) {
      this.speed += this.acceleration;
    } else {
      this.speed = 300;
    }
  }

  openTrunk() {
    this.isTrunkOpen = false;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }
}

const car1 = new Car({
  brand: "Toyota",
  model: "Corolla",
});

const car2 = new Car({
  brand: "Tesla",
  model: "Model 3",
});

const car3 = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

car3.go();

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
