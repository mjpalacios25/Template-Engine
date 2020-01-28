class Employee {
    constructor(name, id, title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email
    }
    getName(){
        console.log(this.name)
    };

    getRole(){
        console.log("Employee")
    };

    getEmail(){
        console.log(this.email)
    }
};

module.exports = Employee