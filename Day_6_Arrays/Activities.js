/* Activity -> 1 : Array Creation and Access */

// Task_1 - Create an array of num1 from 1 to 5 and log the array to the console.

let num1 = [1,2,3,4,5];
console.log(num1);

// Task_2 - Access the first and last elements of the array and log them to the console. 

let num2 = [1,2,3,4,5];
let result1 = num2[0];
let result2 = num2[num2.length-1];
console.log(result1,result2);

/* Activity -> 2 : Array Methods (Basic) */

// Task_3 - Use the 'push' method to add a new number to the end of array and log the updated array.

let num3 = [1,2,3,4,5];
num3.push(6);
console.log(num3);

// Task_4 - Use the 'pop' method to remove the last element from the array and log the updated array.

let num4 = [1,2,3,4,5];
num4.pop();
console.log(num4);

// Task_5 - Use the 'shift' method to remove the first element from the array and log the updated array.

let num5 = [1,2,3,4,5];
num5.shift();
console.log(num5);

// Task_6 - Use the 'unshift' method to add a new number to the beginning of the array and log the updated array.

let num6 = [2,3,4,5];
num6.unshift(1);
console.log(num6);

/* Activity -> 3 : Array Methods (Intermediate) */

// Task_7 - Use the 'map' method to create a new array where each number is doubled and log the new array.

let num7 = [1,2,3,4,5];
let doubledNumber  = num7.map((num7)=> num7*2);
console.log(doubledNumber);

// Task_8 - Use the 'filter' method to create a new array with only even numbers and log the new array.

let num8 = [1,2,3,4,5];
let evenNumber  = num8.filter((num8)=>num8%2==0);
console.log(evenNumber);

// Task_9 - Use the 'reduce' calculate the sum of all numbers in the array and log the result.

let num9 = [1,2,3,4,5];
let sum = num9.reduce((accumulator, currentValue)=> accumulator+currentValue,0);
console.log(sum);

// Task_10 - Use a 'for' loop to iterate over the array and log each element to console.
 
let num10 = [1,2,3,4,5];
for(let i=0; i<num10.length; i++){
    console.log(num10[i]);
}

// Task_11 - Use a 'forEach' method to iterate over the array and log each element to console.

let num11 = [1,2,3,4,5];
num11.forEach((num11)=>console.log(num11));

/* Activity -> 5 : Multi-dimensional Arrays */

// Task_12 - Create a two-dimensional array (matrix) and log the entire array to the console.

let matrix = [
    [1,2,3],
    [4,5,6]
];
console.log(matrix);

// Task_13 - Access and log a specific element from the two-dimensional array.

let matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let specificElement = matrix1[2][1];
console.log(specificElement);