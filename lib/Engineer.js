const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, title, email, gitName){
        super(name, id, title, email);
        this.gitName = gitName

    };
    getGitHub(){
        return this.gitName
    };
    getRole(){
        return "Engineer"
    };
}

module.exports = Engineer