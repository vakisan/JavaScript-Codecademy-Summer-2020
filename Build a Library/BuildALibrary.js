const Book = require('./Book');
const Movie = require('./Movie');
const CD = require('./CD');
const Media = require('./Media');

const book1 = new Book('A Short History of Nearly Everything', 7, 'Bill Bryson', 544);

const movie1 = new Movie('Speed', 6, 'Jan de Bont', 116);


const cd1 = new CD('After Hours', 9, "The Weeknd", ['Alone Again', 'Snowchild', 'In Your Eyes']);

Media.printMediaDetail(cd1);
Media.printMediaDetail(movie1);
Media.printMediaDetail(book1);