const getSleepHours = day => {
    let dayStandardised = day.toLowerCase();
    switch (dayStandardised) {
        case 'monday':
            return 8;
        case "tuesday":
            return 5;
        case 'wednesday':
            return 3;
        case "thursday":
            return 8;
        case 'friday':
            return 6;
        case "saturday":
            return 7;
        case 'sunday':
            return 8;
    }
}

const getActualSleep = () => {
    let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    let runningTotal = 0;
    for (let i = 0; i < 7; i++) {
        runningTotal += getSleepHours(days[i]);
    }
    return runningTotal;
}

const getIdealSleep = () => 8 * 7;

const calculatSleepDebt = () => {
    let actualSleepHours = getActualSleep();
    let idealSleepHours = getIdealSleep();

    console.log("You slept for " + getActualSleep());

    if (actualSleepHours < idealSleepHours) {
        console.log(`You under-slept by ${idealSleepHours - actualSleepHours} hours so you should get some rest!`);
    }
    else if (actualSleepHours === idealSleepHours) {
        console.log("That was the perfect amount of sleep!");
    }
    else {
        console.log(`You overslept by ${actualSleepHours - idealSleepHours} hours so you slept more than needed.`);
    }
};

calculatSleepDebt()