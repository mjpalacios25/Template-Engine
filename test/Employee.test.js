const Employee = require("./lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
      it("should return an object", () => {
        const obj = new Employee();
  
        expect(typeof obj).toEqual("object");
      });
  
    //   it("should set 'number' when created", () => {
    //     const num = 108;
  
    //     const obj = new Arithmetic(num);
  
    //     expect(obj.number).toEqual(num);
    //   });
  
    //   it("should default 'number' to 0", () => {
    //     const obj = new Arithmetic();
  
    //     expect(obj.number).toEqual(0);
    //   });
    });
});
