let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//console.log(secretMessage);

secretMessage.pop();

//console.log(secretMessage);
//console.log(secretMessage.length);

secretMessage.push("to", "Program");
//console.log(secretMessage);

secretMessage[secretMessage.indexOf("easily")] = "right";
//console.log(secretMessage);

secretMessage.shift();
//console.log(secretMessage);

secretMessage.unshift("Programming");
//console.log(secretMessage);

let startIndexToRemove = secretMessage.indexOf('get');
console.log(startIndexToRemove);
let endIndexToRemove = secretMessage.indexOf("time,") + 1;
console.log(endIndexToRemove);
let offsetFromStartToRemove = endIndexToRemove - startIndexToRemove;
console.log(offsetFromStartToRemove);
secretMessage.splice(startIndexToRemove, offsetFromStartToRemove, "know,");

console.log(secretMessage);

console.log(secretMessage.join(" "));
