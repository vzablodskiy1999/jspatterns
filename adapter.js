// IS USED TO ADOPT INTERFACES

class Car {
    drive () {
        console.log("I am driving");
    }
}

class Plane {
    fly () {
        console.log("I am flying");
    }
}

class makePlane {
    constructor(car) {
        this.car = car;
    }

    fly () {
        this.car.drive();
    }
}

const car = new Car();
const plane = new Plane();
const caroplane = new makePlane(car);
car.drive();
plane.fly();
caroplane.fly();