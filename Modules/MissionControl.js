import Airplane from './airplane';

function displayFuelCapacity() {
    Airplane.availableAirplanes.forEach(function (element) {
        console.log('Fuel Capacity of ' + element.name + ':' + element.fuelCapacity);
    });
}

displayFuelCapacity();

// conclusions Node.js supports import with require() and module.exports for exports
//But ES6 introduces newer methods of exports and imports such as export default 

//import X from 'filepath';
