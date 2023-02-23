// before installing babel
// function additionCalculator(...numbers){
//     return numbers.reduce((sum, item) => sum + item, 0);
// }

// module.exports = additionCalculator;

// after installing babel and creating .babelrc file and placing { "presets": ["@babel/preset-env"] } this line inside .babelrc 

export default function additionCalculator(...numbers){
        return numbers.reduce((sum, item) => sum + item, 0);
}