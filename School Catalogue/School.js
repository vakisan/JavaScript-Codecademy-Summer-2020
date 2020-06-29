class School {
    constructor(schoolName, schoolLevel, schoolNumberStudents) {
        this._name = schoolName;
        this._level = schoolLevel;
        this.numberOfStudents = schoolNumberStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(numberOfStudents) {
        if (typeof numberOfStudents === 'number') {
            this._numberOfStudents = numberOfStudents;
        }
        else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeacher) {
        if (substituteTeacher instanceof Array) {
            let random = Math.floor(Math.random() * (substituteTeacher.length - 1));
            console.log(substituteTeacher[random])
            return substituteTeacher[random];
        }
    }
}

module.exports = School;