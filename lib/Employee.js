class Employee {
    constructor(name, id, title, email) {
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email
    }
    getName(){
        return this.name
    };

    getRole(){
        return "Employee"
    };

    getEmail(){
       return this.email
    }
};

module.exports = Employee