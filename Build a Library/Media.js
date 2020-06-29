class Media {
    constructor(newTitle, newAverageRating) {
        if (newTitle) {
            console.log(`You have added the following title: ${newTitle} \n`);
        }
        this._title = newTitle;
        this._isCheckedOut = false;
        this._ratings = [];
        this.addRating(newAverageRating);
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    getAverageRating() {
        let cumulativeRating = 0;
        this.ratings.forEach(rating => {
            return cumulativeRating += rating;
        });
        return Math.round((cumulativeRating / this.ratings.length) * 100) / 100;
    }
    toggleCheckOutStatus() {
        (this.isCheckedOut) ? (this._isCheckedOut = false) : (this._isCheckedOut = true);
        (this.isCheckedOut) ? (console.log("You have Checked Out the following:\n" + this.toString())) : (console.log("You have returned the following:\n" + this.toString()));
    }
    addRating(newRating) {
        this._ratings.push(newRating);
    }
    static printMediaDetail(media) {
        console.log(media.toString());
    }
}

module.exports = Media;