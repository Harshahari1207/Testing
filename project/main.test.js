import { capitalize, reverseStr, calculator, caesar } from "./main";

describe("Capitalize Test cases: ", ()=>{
    test("capitalization of harsha should be Harsha", ()=>{
        expect(capitalize("harsha")).toBe("Harsha");
    });
    test("Capitalization of hello world should be Hello World", ()=>{
        expect(capitalize("hello world")).toBe("Hello World");
    });
    test("Capitaliztion of hEllO WorLd should be Hello World", ()=>{
        expect(capitalize("hEllO WorLd")).toBe("Hello World");
    });
});

describe("Reverse test cases: ", ()=>{
    test("Reverse of harsha should be ahsrah", ()=>{
        expect(reverseStr("harsha")).toBe("ahsrah");
    });
    test("Reverse of hello world should be dlrow olleh", ()=>{
        expect(reverseStr("hello world")).toBe("dlrow olleh");
    });
});
describe("Calculator test Cases: ", ()=>{
    describe("Addition test cases: ", ()=>{
        test("add of 4 and 6 should be 10", ()=>{
            expect(calculator.add(4,6)).toBe(10);
        });
        test("add of 4, 6, 40, 50, 60 should be 160", ()=>{
            expect(calculator.add(4, 6, 40, 50, 60)).toBe(160);
        });
    });
    describe("Substraction test cases: ", ()=>{
        test("substraction of 20 and 4 should be 16",()=>{
            expect(calculator.sub(20, 4)).toBe(16);
        });
        test("substraction of 4 and 29 should be -25",()=>{
            expect(calculator.sub(4, 29)).toBe(-25);
        });
    });
    describe("Multiplication test cases: ", ()=>{
        test("multiply of 5 and 7 should be 35", ()=>{
            expect(calculator.multiply(5,7)).toBe(35);
        });
        test("multiply of 10 and 7 should be 70", ()=>{
            expect(calculator.multiply(10, 7)).toBe(70);
        });
    });
    describe("Division test cases: ", ()=>{
        test("20 divided by 4  should be 5", ()=>{
            expect(calculator.div(20,4)).toBe(5);
        });
        test("5 divided by 10 should be 0.5", ()=>{
            expect(calculator.div(5, 10)).toBe(0.5);
        });
    });
    
});

describe("Caesar Test cases: ",()=>{
    test('works with single letters', () => {
        expect(caesar('A', 1)).toBe('B');
      });
      test('works with words', () => {
        expect(caesar('Aaa', 1)).toBe('Bbb');
      });
      test('works with phrases', () => {
        expect(caesar('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
      });
      test('works with negative shift', () => {
        expect(caesar('Mjqqt, Btwqi!', -5)).toBe('Hello, World!');
      });
      test('wraps', () => {
        expect(caesar('Z', 1)).toBe('A');
      });
      test('works with large shift factors', () => {
        expect(caesar('Hello, World!', 75)).toBe('Ebiil, Tloia!');
      });
      test('works with large negative shift factors', () => {
        expect(caesar('Hello, World!', -29)).toBe('Ebiil, Tloia!');
      });
})