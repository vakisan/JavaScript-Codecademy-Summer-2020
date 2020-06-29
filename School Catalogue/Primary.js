const School = require("./School");

class Primary extends School {
    constructor(schoolName, schoolNumberStudents, schoolPickupPolicy) {
        super(schoolName, 'Primary', schoolNumberStudents)
        this._pickupPolicy = schoolPickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

module.exports = Primary;