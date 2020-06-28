function withConstructor(num) {
    return new Promise((resolve, reject) => {
        if (num === 0) {
            resolve('zero');
        } else {
            resolve('not zero');
        }
    })
}

withConstructor(0)
    .then((resolveValue) => {
        console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
    })

// Write your code below:

async function withAsync(num) {
    if (num === 0) {
        return 'zero';
    } else {
        return 'not zero';
    }
}

// Leave this commented out until step 3:

withAsync(100)
    .then((resolveValue) => {
        console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
    })

/********************************************************************************** */

const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
    brainstormDinner().then((meal) => {
        console.log(`I'm going to make ${meal} for dinner.`);
    })
}

// async/await version:
async function announceDinner() {
    // Write your code below:
    let result = await brainstormDinner();
    console.log(`I'm going to make ${result} for dinner.`);
}

announceDinner();

/****************************************************************** */

const shopForBeans = require('./library.js');

async function getBeans() {
    console.log(`1. Heading to the store to buy beans...`);
    let value = await shopForBeans();
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

/******************************************************************* */

const { shopForBeans, soakTheBeans, cookTheBeans } = require('./library.js');

// Write your code below:

async function makeBeans() {
    let type = await shopForBeans();
    let isSoft = await soakTheBeans(type);
    let dinner = await cookTheBeans(isSoft);
    console.log(dinner);
}

makeBeans();

/*********************************************************************** */

const cookBeanSouffle = require('./library.js');

// Write your code below:

async function hostDinnerParty() {
    try {
        console.log(await cookBeanSouffle() + ' is served!');
    }
    catch (error) {
        console.log(error);
        console.log('Ordering a pizza!');
    }
}

hostDinnerParty();

/************************************************************************* */

let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./library.js')

// Write your code below:

async function serveDinner() {
    const vegetablePromise = steamBroccoli();
    const starchPromise = cookRice();
    const proteinPromise = bakeChicken();
    const sidePromise = cookBeans();
    console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner();

/*********************************************************************** */

let { cookBeans, steamBroccoli, cookRice, bakeChicken } = require('./library.js')

// Write your code below:

async function serveDinnerAgain() {
    const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
    let response = 'Dinner is served. We’re having ';
    let result = foodArray.forEach(function (food) {
        let position = foodArray.indexOf(food);
        if (position < 1) {
            response += food;
        }
        else if (position === foodArray.length - 1) {
            response += ', and ' + food + '.';
        }
        else {
            response += ', ' + food;
        }
    });
    console.log(response);
}

serveDinnerAgain();

