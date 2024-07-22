/* Activity -> 1 : Arithmetic Operations */

// Task_1 - Write a program to add two numbers and log the result to the console.

let a = 5;
let b = 9;
console.log(`The sum of ${a} and ${b} is :`, a+b);

// Task_2 - Write a program to substract two numbers and log the result to the console.

let num1 = 5;
let num2 = 9;
console.log(`The substraction of ${num1} and ${num2} is :`, num1-num2);

// Task_3 - Write a program to multiply two numbers and log the result to the console.
let mul1 = 5;
let mul2 = 9;
console.log(`The multiplication of ${mul1} and ${mul2} is :`, mul1*mul2);

// Task_4 - Write a program to divide two numbers and log the result to the console.
let a2 = 10;
let a3 = 2;
console.log(`The dividation of ${a2} and ${a3} is :`, a2/a3);

// Task_5 - Write a program to find the reminder when one number is divided by another and log the result to the console.

let a4 = 13;
let a5 = 2;
console.log(`The reminder of ${a4} and ${a5} is :`, a4%a5);

/* Activity -> 2 : Assignment Operators */

// Task_6 - Use the '+=' operator to add a number to a variable and log the result to the console.
let a6 = 5
a6 += a6;
console.log(a6);

// Task_7 - Use the '-=' operator to substract a number to a variable and log the result to the console.

let a7 = 5
a7 -= a7;
console.log(a7);

/* Activity -> 3 : Comparison Operators */

// Task_8 - Write a program to compare two numbers using '>' and '<' and log the result to the console.

let c = 15;
let d = 25;

console.log(`the greatest number of ${c} > ${d} :`, c>d);
console.log(`the smallest number of ${c} < ${d} :`, c<d);

// Task_9 - Write a program to compare two numbers using '>=' and '<=' and log the result to the console.

let e = 15;
let f = 20;

console.log(`the greatest number of ${e} >= ${f} :`, e>=f);
console.log(`the smallest number of ${e} <= ${f} :`, e<=f);

// Task_10 - Write a program to compare two numbers using '==' and '===' and log the result to the console.

let g = 5;
let h = "5";
console.log(`the comparison of ${g} == ${h} is:`,g==h);
console.log(`the comparison of ${g} === ${h} is:`,g===h);

/* Activity -> 4 : Logical Operators */

// Task_11 - Write a program that uses the '&&' operator to combine two conditions and log the result to the console.

let con1 = true;
let con2 = false;
console.log(`The result of combining with && is :`, con1&&con2);

// Task_12 - Write a program that uses the '||' operator to combine two conditions and log the result to the console.
let con3 = true;
let con4 = false;
console.log(`The result of combining with || is :`, con3||con4);

// Task_13 - Write a program that uses the '!' operator to negate a condition and log the result to the console.

let x = 5;
let y = 5;
console.log(`check ${x} != ${y} :`, x!=y);

/* Activity -> 5 : Ternary Operators */

// Task_13 - Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

let x1 = 5;
console.log(x1>0? 'you are plus zero' : "you are at negative side" );