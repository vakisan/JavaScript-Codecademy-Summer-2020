/* Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean
 */

let input = 'turpentine and turtles';
const vowels = ["a", "e", "i", "o", "u"];
let whaleSound = [];

let i = 0;
let j = 0;

//I used nested while loops to practice while loops usage as i felt it is more complex than for loops. just for practice but for loops would have been appropriate.

while (i < input.length) {
    let j = 0;
    while (j < vowels.length) {
        if (vowels[j] === input.charAt(i)) {
            if (input.charAt(i) === "u" || input.charAt(i) === "e") {
                whaleSound.push(input.charAt(i).toUpperCase());
            }
            whaleSound.push(input.charAt(i).toUpperCase());
        }
        j++;
    }
    i++;
}
console.log(whaleSound);
