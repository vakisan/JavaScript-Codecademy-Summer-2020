const Media = require('./Media');

class Book extends Media {
    constructor(newTitle, newAverageRating, newAuthor, numberOfPages) {
        super(newTitle, newAverageRating);
        this._author = newAuthor;
        this._pages = numberOfPages;
    };

    get author() {
        return this._author;
    };
    get pages() {
        return this._pages;
    };

    toString() {
        var result = new Book(null, null, null, null, null).constructor.name;
        return `Media Type: ${result}\nTitle: ${this.title}\nAuthor: ${this.author}\nRatings: ${this.getAverageRating()}\nPages: ${this.pages}\nChecked out: ${this.isCheckedOut}\n`
    }

}

module.exports = Book;