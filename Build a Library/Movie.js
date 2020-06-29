const Media = require('./Media');

class Movie extends Media {
    constructor(newTitle, newAverageRating, newDirector, newRuntime) {
        super(newTitle, newAverageRating);
        this._director = newDirector;
        this._runtime = newRuntime;
    };

    get director() {
        return this._director;
    };
    get runtime() {
        return this._runtime;
    };

    toString() {
        var result = new Movie(null, null, null, null, null).constructor.name;
        return `Media Type: ${result}\nTitle: ${this.title}\nDirector: ${this.director}\nRatings: ${this.getAverageRating()}\nRuntime : ${this.runtime}\nChecked out: ${this.isCheckedOut}\n`
    }

}

module.exports = Movie;