/* Activity -> 1 : If-Else Statements */

// Task_1 - Write a program to check if a number is positive, negative, or zero and log the result to the console.

let num1 = 10;
if (num1 > 0) {
    console.log('the number is positive');
} else {
    console.log('the number is negative');
}

// Task_2 - Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age = 21;
if (age > 18) {
    console.log(`you can give the vote`);
} else {
    console.log(`you can't give the vote`);
}

/* Activity -> 2 : Nested If-Else Statements */

// Task_3 - Write a program to find the largest of three numbers using nested if-else statement.

let a = 5;
let b = 10;
let c = 15;
if (a > b) {
    if (a > c) {
        console.log(`${a} is greater than ${c}:`, a > c);
    } else {
        console.log(`${c} is greater than ${a}:`, c > a);
    }
} else {
    if (b > c) {
        console.log(`${b} is greater than ${c}:`, b > c);
    } else {
        console.log(`${c} is greater than ${b}:`, c > b);
    }
}

/* Activity -> 3 : Switch case */

// Task_4 - Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let num4 = 5;
switch (num4) {
    case 1:
        console.log("its a Sunday!!")
        break;
    case 2:
        console.log("its a Monday!!")
        break;
    case 3:
        console.log("its a Tuesday!!")
        break;
    case 4:
        console.log("its a Wednesday!!")
        break;
    case 5:
        console.log("its a thursday!!")
        break;
    case 6:
        console.log("its a Friday!!")
        break;
    case 7:
        console.log("its a Saturday!!")
        break;
}

// Task_5 - Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.

let marks = 75;
let grade;
switch (true) {
    case marks >= 90 && marks <= 100:
        grade = "A";
        break;
    case marks >= 80 && marks <= 90:
        grade = "B";
        break;
    case marks >= 70 && marks <= 80:
        grade = "C";
        break;
    case marks >= 60 && marks <= 70:
        grade = "D";
        break;
    case marks >= 0 && marks <= 60:
        grade = "E";
        break;
}
console.log(`the grade is :`,grade)
/* Activity -> 4 : Conditional (Ternary) Operator */

// Task_6 - Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let a1 = 14;
let result = a1 % 2 == 0 ? "The number is even" : "The number is odd";
console.log(result);

/* Activity -> 5 : Combining Conditions */

// Task_7 -Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2024;
if((year%4==0 && year%100!==0)||year%400==0){
    console.log(`${year} is leap year`);
}else{
    console.log(`${year} is not a leap year`);
}