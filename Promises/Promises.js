const inventory = {
    sunglasses: 0,
    pants: 1088,
    bags: 1344
};

// Write your code below:

function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.');
    } else {
        reject('That item is sold out.');
    }
}

function orderSunglasses() {
    const promise = new Promise(myExecutor);
    return promise;
}

const orderPromise = orderSunglasses();

console.log(orderPromise);

/**************************************************************************************************** */

console.log("This is the first line of code in app.js.");
// Keep the line above as the first line of code
// Write your code here:

function usingSTO() {
    console.log("Entered usingSTO");
}

setTimeout(usingSTO, 2000);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");

/**************************************************************************************************** */

const { checkAvailability } = require('./library.js');

const onFulfill = (itemsArray) => {
    console.log(`Items checked: ${itemsArray}`);
    console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
    console.log(rejectionReason);
};

// Write your code below:

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');

const checkPants = checkAvailability('pants', 'Favorite Supply Co.');

const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
    .then(onFulfill)
    .catch(onReject)