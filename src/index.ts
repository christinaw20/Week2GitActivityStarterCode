import { Calculator } from "./calculator";

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);

const result_subtract = calc.subtract(10, 8);
console.log(`result_subtract = ${result_subtract}`);

console.log(`result_divide = ${calc.divide(6, 3)}`);

const result_multiply = calc.multiply(2, 3);
console.log(`result_multiply = ${result_multiply}`);

calc.hello();
