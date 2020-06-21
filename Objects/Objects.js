// Write your fasterShip object literal below
let fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'
};

/**************************************************************************************************************** */

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below

let crewCount = spaceship.numCrew;

let planetArray = spaceship.flightPath;

/**************************************************************************************************************** */

let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Mission': true,
    homePlanet: 'Earth',
    numCrew: 5
};

let propName = 'Active Mission';

// Write your code below

let isActive = spaceship['Active Mission'];

console.log(spaceship[propName]);

/**************************************************************************************************************** */

let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    color: 'silver',
    'Secret Mission': 'Discover life outside of Earth.'
};

// Write your code below

spaceship.color = 'glorious gold';
spaceship.numEngines = 6;
delete spaceship['Secret Mission'];

//****************************************************************************************************************** */
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

let alienShip = {
    retreat() { console.log(retreatMessage) },
    takeOff: function () { console.log('Spim... Borp... Glix... Blastoff!') }
}

alienShip.retreat();
alienShip.takeOff();

/********************************************************************************************************************** */

let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};

let capFave = spaceship.crew.captain['favorite foods'][0];

spaceship.passengers = {
    passengerOne: {
        name: 'Dan'
    }, passengerTwo: { name: 'DJ' }
}

spaceship.passengers = [{
    name: 'Dan'
}, { name: 'DJ' }]

let firstPassenger = spaceship.passengers[0];

/********************************************************************************************************************** */

let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

// Write your code below

let greenEnergy = obj => { obj['Fuel Type'] = 'avocado oil' };

let remotelyDisable = obj => obj.disabled = true;

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

/********************************************************************************************************************** */

let spaceship = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        hello: {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
} // needed to use bracket notation because crewmember is a string which does not have the name property to it. so we must use bracket noation to use the string to identyify the key property that matches the string.


for (let crewMember in spaceship.crew) {
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
};