const Media = require('./Media');

class CD extends Media {
    constructor(newTitle, newAverageRating, newArtist, newSongs) {
        super(newTitle, newAverageRating);
        this._artist = newArtist;
        this._songs = newSongs;
    };

    get artist() {
        return this._artist;
    };
    get songs() {
        return this._songs;
    };

    toString() {
        var result = new CD(null, null, null, null, null).constructor.name;
        return `Media Type: ${result}\nTitle: ${this.title}\nArtist: ${this.artist}\nRatings: ${this.getAverageRating()}\nSongs: ${this.songs}\nChecked out: ${this.isCheckedOut}\n`
    }

}

module.exports = CD;