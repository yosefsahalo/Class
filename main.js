class Car {
    numberOfWheels;
    sizeOfEngine;
    color;
    constructor(number_Of_Wheels, size_Of_Engine, color_) {
        this.numberOfWheels = number_Of_Wheels
        this.sizeOfEngine = size_Of_Engine
        this.color = color_
    }
    allTheKeys() {
        return `${this.numberOfWheels} ${this.sizeOfEngine} ${this.color} `
    }
    static bigestEngine(object1, object2, object3) {
        let arrayObject2 = [object1, object2, object3];
        let arrayObject3 = [];
        arrayObject2.forEach(engineElement => {
            arrayObject3.push(engineElement.sizeOfEngine);
            arrayObject3.sort(function(a, b){return a - b});
        });
        return `${arrayObject3[arrayObject3.length -1]}`
    }
}
let car = new Car(4, 5000, 'green');
let car1 = new Car(4, 2000, 'yellow');
let car2 = new Car(4, 3000, 'red');
console.log(car);
console.log(car.allTheKeys());


class Bus extends Car {
    name;
    constructor(number_Of_Wheels, size_Of_Engine, color_, name_) {
        super(number_Of_Wheels, size_Of_Engine, color_)
        this.name = name_;
    }
    copyAllTheKeys1() {
        return `${super.allTheKeys()} ${this.name}`
    }
    printName() {
        return `${this.name}`
    }
    get capsLock() {
        return `${this.printName().toUpperCase()}`
    }
}
let bus = new Bus(8, 2500, 'green', 'bus');
console.log(bus);
console.log(bus.copyAllTheKeys1());
console.log(bus.printName());
console.log(bus.capsLock);

class Truck extends Car {
    name;
    constructor(number_Of_Wheels, size_Of_Engine, color_, name_) {
        super(number_Of_Wheels, size_Of_Engine, color_)
        this.name = name_;
    }
    copyAllTheKeys2() {
        return `${super.allTheKeys()} ${this.name}`
    }
}
let truck = new Truck(10, 4500, 'yellow', 'truck');
console.log(truck);
console.log(truck.copyAllTheKeys2());

class RaceCar extends Car {
    name;
    constructor(number_Of_Wheels, size_Of_Engine, color_, name_) {
        super(number_Of_Wheels, size_Of_Engine, color_)
        this.name = name_;
    }
    copyAllTheKeys3() {
        return `${super.allTheKeys()} ${this.name}`
    }
}
let raceCar = new RaceCar(4, 2000, 'black', 'racecar');
console.log(raceCar);
console.log(raceCar.copyAllTheKeys3());

console.log(Car.bigestEngine(car,car1,car2));


function printUserVical() {
    let userVical = new RaceCar(valueOfWhills.value,valueOfEngineg.value,valueOfColor.value,valueOfCar.value);
    console.log(userVical);
    td1.innerHTML += `${valueOfWhills.value}`     
    td2.innerHTML += `${valueOfEngineg.value}`     
    td3.innerHTML += `${valueOfColor.value}`     
    td4.innerHTML += `${valueOfCar.value}`     
}