/* Activity -> 1 : Variable Declaration */

// Task_1 - Declare a variable using 'var', assign it a number and log the value to console.

var number = 5;
console.log(number);

// Task_2 - Declare a variable using 'let', assign it a string and log the value to console.

let str = "Rutul";
console.log(str);

/* Activity -> 2 : Constant Declaration */

// Task_3 - Declare a variable using 'const', assign it a boolean value and log the value to console.

const isLoggedin = true;
console.log(isLoggedin);

/* Activity -> 3 : Data Types */

// Task_4 - Create variables of different data types (number, string, boolean, object, array) and log each variable's type using typeOf operator.

let nmber = 10;
console.log(`The types of ${nmber} is:`, typeof nmber);

let string = "rp";
console.log(`The types of ${string} is:`, typeof string);

let isAccepted = false;
console.log(`The types of ${isAccepted} is:`, typeof isAccepted);

let book = {
    name: "Bhagvad Gita",
    writer: "Vedavyasa"
}
console.log(`The types of ${book} is:`, typeof book);

let a1  = [2,1,4];
console.log(`The types of ${a1} is:`, typeof a1);

/* Activity -> 4 : Reassigning Variables */

// Task_5 - Declare a variable using 'let', assign it an initial value, reassign a new value and log both values to console.

let val = 25;
console.log(val);
val = 32;
console.log(val);

/* Activity -> 5 : Understanding 'Const' */

// Task_6 - Try reassigning a variable declared with 'const' and observe the error.

const b = 50;
console.log(b);
b = 10;
console.log(b);


