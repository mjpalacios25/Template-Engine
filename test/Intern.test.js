const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
      it("should return an object", () => {
        const obj = new Intern();
  
        expect(typeof obj).toEqual("object");
      });
      it("should return Intern information", () => {
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com"};
        const obj = new Intern(name, id, title, email);
  
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
        const obj = new Intern(name, id, title, email).getName();
  
        expect(obj).toEqual(name);
      });
    });
    describe("getRole", () => {
      it("should the persons name", () => {
        const role = "Intern";
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com"};
        const obj = new Intern(name, id, title, email).getRole();
  
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
        const obj = new Intern(name, id, title, email).getEmail();
  
        expect(obj).toEqual(testemail);
      });
    });
    describe("getSchool", () => {
      it("should the persons email", () => {
        const testSchool = "Rutgers";
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";
        const gitSchool = "Rutgers"

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com", gitName: "mjpalacios25"};
        const obj = new Intern(name, id, title, email, gitSchool).getSchool();
  
        expect(obj).toEqual(testSchool);
      });
    });
});
