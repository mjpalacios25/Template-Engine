const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, title, email, officeNumber){
        super(name, id, title, email);
        this.officeNumber = officeNumber

    };
    getOffice(){
        return this.officeNumber
    };
    getRole(){
        return "Manager"
    };
}

module.exports = Manager