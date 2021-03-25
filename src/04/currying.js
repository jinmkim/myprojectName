const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const addX = (x) => (a) => add(x, a);
const multiplyX = (x) => (a) => multiply(a, 2);
const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
// => ((x * 2) * 3) + 4
const formula = (x) => addFour(multiplyThree(multiplyTwo(x)));
// => ((x + 4) * 3) * 2
const formulaB = (x) => multiplyTwo(multiplyThree(addFour(x)));
console.log(formula(1));
console.log(formulaB(2));
