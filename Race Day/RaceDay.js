//Race number generator with entry requirements;

let raceNumber = Math.floor(Math.random() * 1000);

let isRegistered = false;
let runnerAge = 0;

if (isRegistered && runnerAge > 18) {
    raceNumber += 1000;
}

if (isRegistered && runnerAge > 18) {
    console.log(`Race Starts at 9.30, Your racenumber is ${raceNumber}`);
}
else if (!isRegistered && runnerAge > 18) {
    console.log(`Race Starts at 11.00, Your racenumber is ${raceNumber}`);
}
else if (runnerAge < 18) {
    console.log(`Race Starts at 12.30, Your racenumber is ${raceNumber}`);
}
else {
    //if aged exacly 18;
    console.log(`Please see the helpdesk`);
}