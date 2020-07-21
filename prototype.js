const vehicle = {
    movable: true,
    haveWheels: true
}

// first parameter - object that will become a proto of second parameter
const vehicleCar = Object.create(vehicle, {
    wheelsNumber: {
        value: 4
    }
})

console.log(vehicleCar)