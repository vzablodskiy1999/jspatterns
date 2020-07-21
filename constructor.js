function Car(name) {
    this.name = name;
}

Car.prototype.drive = () => {
    console.log("Wroom wroom");
}

const bmw = new Car("BMW");
bmw.drive()

// the same as

class Vehicle {
    constructor(type) {
        this.type = type;
    }

    drive() {
        console.log("Beep beep");
    }
}

const bike = new Vehicle("bicycle")
bike.drive()