/* Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit. */

//kelvin will be a constant so I declare const as opposed to var or let;
const kelvin = 293;

//kelvin to celcius 293
let celcius = kelvin - 273;

//celcius to fahrenheit. also rounded down to nearest integer
let fahrenheit = Math.floor(celcius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
