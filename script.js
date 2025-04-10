// Complete the js code
function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
	  Car.call(this, make, model); // Inherit properties from Car
  this.topSpeed = topSpeed;
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add SportsCar-specific method
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};
function createCar() {
  const make = document.getElementById('make').value;
  const model = document.getElementById('model').value;
  const topSpeed = parseInt(document.getElementById('topSpeed').value, 10);

  if (!make || !model || isNaN(topSpeed)) {
    document.getElementById('output').innerText = "Please enter all fields correctly.";
    return;
  }

  const car = new SportsCar(make, model, topSpeed);
  const output = `
    Make & Model: ${car.getMakeModel()}<br>
    Top Speed: ${car.getTopSpeed()} mph
  `;
  document.getElementById('output').innerHTML = output;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
