const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should return an object", () => {
        const obj = new Employee();
  
        expect(typeof obj).toEqual("object");
      });
      it("should return employee information", () => {
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com"};
        const obj = new Employee(name, id, title, email);
  
        expect(obj).toEqual(employeInfo);
      });
    });
    describe("getName", () => {
      it("should the persons name", () => {
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com"};
        const obj = new Employee(name, id, title, email).getName();
  
        expect(obj).toEqual(name);
      });
    });
    describe("getName", () => {
      it("should the persons name", () => {
        const role = "Employee";
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com"};
        const obj = new Employee(name, id, title, email).getRole();
  
        expect(obj).toEqual(role);
      });
    });
});
