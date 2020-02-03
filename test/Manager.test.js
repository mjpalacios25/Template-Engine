const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
      it("should return an object", () => {
        const obj = new Manager();
  
        expect(typeof obj).toEqual("object");
      });
      it("should return Manager information", () => {
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com"};
        const obj = new Manager(name, id, title, email);
  
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
        const obj = new Manager(name, id, title, email).getName();
  
        expect(obj).toEqual(name);
      });
    });
    describe("getRole", () => {
      it("should the persons name", () => {
        const role = "Manager";
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com"};
        const obj = new Manager(name, id, title, email).getRole();
  
        expect(obj).toEqual(role);
      });
    });
    describe("getEmail", () => {
      it("should the persons email", () => {
        const testemail = "dude@email.com";
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com"};
        const obj = new Manager(name, id, title, email).getEmail();
  
        expect(obj).toEqual(testemail);
      });
    });
    describe("getOffice", () => {
      it("should the persons email", () => {
        const testOffice = 100;
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";
        const officeNumber = 100;

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com", gitName: "mjpalacios25"};
        const obj = new Manager(name, id, title, email, officeNumber).getOffice();
  
        expect(obj).toEqual(testOffice);
      });
    });
});
