/* Activity -> 1 : Function Declaration */

// Task_1 - Write a function to check if a number is even or odd and log the result to the console.

function checkEvenOrOdd(num){
    if(num%2==0){
        console.log(`${num} is even`);
    }else{
        console.log(`${num} is odd`);
    }
}
checkEvenOrOdd(4);

// Task_2 - Write a function to calculate the square of a number and return the result.

function checkSquare(num1){
    num1 *= num1;
    console.log(num1);
}
checkSquare(2);

/* Activity -> 2 : Function Expression */

// Task_3 - Write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function(a,b){
    if(a>b){
        console.log(`${a} is greater then ${b}`);
    }else{
        console.log(`${b} is greater then ${a}`);
    }
}
findMax(4,5);

// Task_4 - Write a function expression to concatenete two strings and return the result.

const combine = function(x,y){
    console.log(x+y);
}
combine("Hello"," world!");

/* Activity -> 3 : Arrow Functions */

// Task_5 - Write a arrow function to calculate the sum of two numbers and return the result.

const sum = (a1,a2)=>{
    x1 = a1+a2;
    console.log(x1);
}
sum(3,4);

// Task_6 - Write a arrow function to check if a string contains a specific character and return a boolean value.
const specificCharacter = (str, char) => {
    let char1 = str.includes(char);
    console.log(char1);
}
specificCharacter("Hey GoodNoon","z");


/* Activity -> 4 : Function Parameters and Default Values */

// Task_7 - Write a function that takes two parameters and returns their product. Provide a Default value for the second parameter.
function multiply(a,b=2){
    let mul3 = a*b;
    console.log(mul3);
}
multiply(3);

// Task_8 - Write a function that takes a person's name and age and returns a greeting message. provide a default value for the age.

function greeting(name,age4 =19){
    let greet = `Hello ${name}! i am glad to know you are ${age4}  `;
    console.log(greet);
}
greeting("Rutul");

/* Activity -> 5 : Higher-Order Functions */

// Task_9 - Write a higher-order function that takes a function and a number and calls the function that many times.

function repeatFunction(func,times){
    for (let i=0;i<times;i++){
        func();
    }
}
const sayHello = ()=> console.log("Hey!!");
repeatFunction(sayHello,4);

// Task_10 - Write a higher-order function that takes two functions and a vaue, applies the first function to the value and then applies the second function to the result.

function multipleFunction(func1,func2,val1){
    return func1(func2(val1));
}
const addition = (x)=> x+2;
const multiplication = (x) => x*2;

let result1 = multipleFunction(addition,multiplication,5)
console.log(result1);
