// before installing babel
// const additionCalculator = require("./additionCalculator");

// after installing babel
import additionCalculator from "./additionCalculator";
describe("additionCalculator's test cases ", ()=>{
    test("addition of 4 and 6 to equal 10", ()=>{
        expect(additionCalculator(4,6)).toBe(10);
    });
    test("addition of 100, 50, 20, 45 and 30 equal to 245", ()=>{
        expect(additionCalculator(100,50,20,45,30)).toBe(245);
    });
    test("addition of 7 equal to 7", ()=>{
        expect(additionCalculator(7)).toBe(7);
    });
    test("addtion of no arguements provided equal to 0", ()=>{
        expect(additionCalculator()).toBe(0);
    });
});
