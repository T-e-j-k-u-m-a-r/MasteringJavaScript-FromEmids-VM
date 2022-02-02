/**
 * Objects: Objects are the skeleton of Class, They are defined with key & value pairs
 */

const emptyObj = {}

const carObject = {

    cname: "Maruthi Ciaz",
    model: 2025,
    fuelType: "Diesel",
    color: "white",
    startEngine: function () {
        console.log('-Engine Started-')
    },
    isBS6Engine: true,
    friendsWhoOwnsThisCar: ["Jeevitha", "Rohit", "Tristan", "Sreesha"],
    stopEngine: function () {
        console.log('-Engine Stopped-');
    }
}

const { cname, model, fuelType, color, isBS6Engine } = carObject;

console.log(`car name is ${cname}, Its model is ${model}`);

carObject.startEngine()
carObject.stopEngine()

