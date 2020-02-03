const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should return an object", () => {
        const obj = new Engineer();
  
        expect(typeof obj).toEqual("object");
      });
      it("should return Engineer information", () => {
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com"};
        const obj = new Engineer(name, id, title, email);
  
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
        const obj = new Engineer(name, id, title, email).getName();
  
        expect(obj).toEqual(name);
      });
    });
    describe("getRole", () => {
      it("should the persons name", () => {
        const role = "Engineer";
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com"};
        const obj = new Engineer(name, id, title, email).getRole();
  
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
        const obj = new Engineer(name, id, title, email).getEmail();
  
        expect(obj).toEqual(testemail);
      });
    });
    describe("getGitHub", () => {
      it("should the persons email", () => {
        const testGit = "mjpalacios25";
        const name = "moses";
        const id = 2;
        const title = "dudeman";
        const email = "dude@email.com";
        const gitName = "mjpalacios25"

        const employeInfo = {name : "moses", id : 2, title : "dudeman", email : "dude@email.com", gitName: "mjpalacios25"};
        const obj = new Engineer(name, id, title, email, gitName).getGitHub();
  
        expect(obj).toEqual(testGit);
      });
    });
});
