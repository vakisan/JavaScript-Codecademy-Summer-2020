function countCharacter(inputString, inputCharacter) {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++;
        }
    }
    return count;
};

function capitalizeFirstCharacterOfWords(string) {
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
    return arr.join(" ");
};


function reverseWord(word) {
    return word.split("").reverse().join("");
};

function reverseAllWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = MessageMixer.reverseWord(words[i]);
    }
    return words.join(" ");
};


function replaceFirstOccurence(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
};


function replaceAllOccurrences(string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
};

function encode(string) {
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o": "0" };
    for (let key in replacementObject) {
        string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]);
    }
    return string;
};

const palindrome = (str) => {
    let newString = str + " " + MessageMixer.reverseWord(str);
    return newString;
}

function pigLatin(sentence, character) {
    sentence = sentence.split(" ").join(character);
    return sentence;
}

const MessageMixer = {
    countCharacter,
    capitalizeFirstCharacterOfWords,
    reverseWord,
    reverseAllWords,
    replaceAllOccurrences,
    replaceFirstOccurence,
    encode,
    palindrome,
    pigLatin
};

console.log(pigLatin("What is the color of the sky?", "n"));
module.exports = MessageMixer;

//I know how to do named exports and default exports too but as i am using node
//e6 exports and import will not work with the version of node i am using.