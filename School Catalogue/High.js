const School = require('./School');

class High extends School {
    constructor(schoolName, schoolNumberStudents, schoolSportsTeam) {
        super(schoolName, 'High', schoolNumberStudents);
        this._sportsTeam = schoolSportsTeam;
    }

    get sportsTeam() {
        return this._sportsTeam;
    }
}

module.exports = High;