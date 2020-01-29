const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber){
        super(this.name, this.id, this.title, this.email);
        this.officeNumber = officeNumber

    };
    getRole(){
        console.log("Manager")
    };
}

module.exports = Manager