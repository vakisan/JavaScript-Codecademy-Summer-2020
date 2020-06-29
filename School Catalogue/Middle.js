const School = require("./School");

class Middle extends School {
    constructor(schoolName, schoolNumberStudents) {
        super(schoolName, 'Middle', schoolNumberStudents)
    }
}
module.exports = Middle;