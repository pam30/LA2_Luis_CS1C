// 1. Declare variables and constant
let a = 25;
let b = 20;
let c = 12;
let d = "15"; // string value
const e = 15;

// Convert d to number for calculations
let dNum = Number(d);

// 2.a. Display the sum of all variables and constant
let sum = a + b + c + dNum + e;
console.log("Sum of a, b, c, d, and e:", sum);

// 2.b. Compare d and e using relational operators
console.log("d > e:", dNum > e);
console.log("d < e:", dNum < e);
console.log("d >= e:", dNum >= e);
console.log("d <= e:", dNum <= e);
console.log("d === e:", d === e); // compares value and type

//Subtract all the values of the declared variables
let result1 = a - b - c - dNum - e;
console.log("Subtraction result:", result1);

//  Multiply a and c, then divide by e
let result2 = (a * c) / e;
console.log("Multiplication of a and c, divided by e:", result2);

// Display the exponent value of e raised to power c
let result3 = e ** c;
console.log("e raised to the power of c:", result3);
// Reassigning result3 to e is not allowed in JavaScript
console.log("Error: Cannot reassign a value to constant 'e'. This would cause a runtime error.");
