const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school){
        super(this.name, this.id, this.title, this.email);
        this.school = school

    };
    getSchool(){

    }
    getRole(){
        console.log("Intern")
    };
}

module.exports = Intern