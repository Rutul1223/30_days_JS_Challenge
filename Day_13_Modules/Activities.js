/* Activity -> 1 : Creating and Exporting Modules */

// Task_1 - Create a module that exports a function to add two numbers. Import and use this module in another script.
import axios from "axios";
import { add } from "./main.js";

const num1 = 5;
const num2 = 7;
const sum = add(num1,num2);

console.log(`The sum of ${num1} and  ${num2} is : ${sum}`);

// Task_2 - Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import { person } from "./main.js";

console.log(person.greet());
console.log(person.celebrateBirthday());

/* Activity -> 2 : Named and Default Exports */

// Task_3 - Create a module that exports multiple functions using named exportes. Imports and use these functions in another script.
import { add1, divide, multiply, substract } from "./main.js";
const num3  = 4;
const num4  = 3;
console.log(`The sum of ${num3} and  ${num4} is : ${add1(num3,num4)}`);
console.log(`The dividation of ${num3} and  ${num4} is : ${divide(num3,num4)}`);
console.log(`The multiplication of ${num3} and  ${num4} is : ${multiply(num3,num4)}`);
console.log(`The substraction of ${num3} and  ${num4} is : ${substract(num3,num4)}`);

// Task_4 - Create a module that exports a single function using default export. Import and use this function in another script.

import add2 from './main.js';

const num5 = 5;
const num6 = 10;

console.log(`The sum of ${num5} and ${num6} is : ${add2(num5, num6)}`);

/* Activity -> 3 : Importing Entire Modules */

// Task_5 - Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as utils from './main.js';

const num7 = 10;
const num8 = 5;

console.log(`PI is : ${utils.PI}`);
console.log(`E is : ${utils.E}`);
console.log(`The sum of ${num7} and ${num8} is : ${utils.add(num7, num8)}`);
console.log(`The difference between ${num7} and ${num8} is : ${utils.subtract2(num7, num8)}`);

/* Activity -> 4 : Using Third-Party Modules */

// Task_6 - Install a third-party module (e.g.,lodash) using npm. Import and use a function from this module in a script.

import _ from 'lodash';

const numbers = [1,2,3,4,5,6,7,8,9,10];
const shuffledNumbers =_.shuffle(numbers);

console.log('Original array :',numbers);
console.log('Shuffled array :', shuffledNumbers);

// Task_7 - Install a third-party module (e.g.,axios) using npm. Import and use this module to make a network request in a script.

async function fetchData(){
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Data:',response);
    } catch (error) {
        console.log('Error Fetching data:',error);
    }
}
fetchData();

/* Activity -> 5 : Module Bundling (Optional) */

// Task_8 - Use a module bundler like webpack or parcel to bundle multiple javascript files into a single file. Write a script to demonstrate the bundling process.

// Ans is in this folder :- webpack-example