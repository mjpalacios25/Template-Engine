const Employee = require("./Employee");

class Enginner extends Employee {
    constructor(gitName){
        super(this.name, this.id, this.title, this.email);
        this.gitName = gitName

    };
    getGitHub(){
        console.log(this.gitName)
    };
    getRole(){
        console.log("Engineer")
    };
}

module.exports = Enginner