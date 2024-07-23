/* Activity -> 1 : Template Literals */

// Task_1 - Use the template literals to create a string that includes variables for a person's name and age and log the string to the console.

let personName = "Rutul Morningstar";
let age = 19;
console.log(`the name is ${personName} and age is ${age}`);

// Task_2 - Create a multi-line string using template literals and log it to the console.

let multiLineString = `This is a multi-line string.
It allows you to write strings that span multiple lines
without needing to use special characters or concatenation.`;

console.log(multiLineString);

/* Activity -> 2 : Destructuring */

// Task_3 - Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arr = [10,20,30,40,50];
let[firstElement, secondElement] = arr;
console.log(`FirstElement is ${firstElement} and secondElement is ${secondElement}`);

// Task_4 - Use object destructuring to extract the title and author form a book object and log them to the console.

const book = {
    title:"Bhagvad Gita",
    author: "Ved Vyas",
}
let {title,author} = book;
console.log(`${title} ${author}`)

/* Activity -> 3 : Spread and Rest Operators */

// Task_5 - Use the spread operator to create a new array that includes all elements of an existing array plus additional elements and log the new array to the console.

let existingArray = [1,2,3];
let newArray = [...existingArray,4,5,6];
console.log(newArray);

// Task_6 - Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result.

let sumAll = (...num1)=>{
    let sum = num1.reduce((accumulator,currentValue) => accumulator+currentValue,0);
    return sum;
}
console.log(sumAll(1,2,3,4,5,6));

/* Activity -> 4 : Default Parameters */

// Task_7 - Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

const multiply = function(a,b=2){
    return a*b;
}
console.log(multiply(7));

/* Activity -> 5 : Enhanced Object Literals */

// Task_8 - Use enhanced object literals to create an object with methods and properties and log the object to the console.

const person = {
    name: 'Rutul',
    age: 19,
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
};
console.log(person);
console.log(person.introduce());

// Task_9 - Create an object with computed property names based on variables and log the object to the console.

const key1 = "FirstName";
const key2 = "Lastname";
const  person2 = {
    [key1]:"Rutul",
    [key2]:"Morningstar"
}
console.log(person2);
