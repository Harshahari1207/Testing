function additionalCalculatorTester(){
    additionCalculator(4,6) === 10?
        console.log("Test Passed")
        :  
        console.log("Test Failed");
    
}
const additionCalculator = (a, b) => a + b;


additionalCalculatorTester();