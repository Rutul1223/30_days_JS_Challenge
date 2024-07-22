/* Activity -> 1 : For Loop */

// Task_1 - Write a program to print numbers from 1 to 10 using a for loop.

for(let i=1;i<=10;i++){
    console.log(i);
}

// Task_2 - Write a program to print the multiplication table of 5 using a for loop.
let a = 5;
for(let i =1;i<=10;i++){
     let mul = a*i;
     console.log(`${a}*${i}:`,mul);
}

/* Activity -> 2 : While Loop */

// Task_3 - Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let a2 = 1
let sum =0;
while(a2<=10){
    sum+=a2;
    a2++
}
console.log(`The sum of numbers from 1 to 10 is :` ,sum);

// Task_4 - Write a program to print numbers from 10 to 1 using while loop.

let a3 = 10;
while(a3>=1){
    a3--;
    console.log(a3);
}


/* Activity -> 3 : Do...While Loop */

// Task_5 - Write a program to print numbers from 1 to 5 using a do...while loop.
let i =1;
do{
    console.log(i);
    i++
}while(i<=5)


// Task_6 - Write a program to calculate the factorial of number using a do...while loop.

let x = 4;
let fact = 1;
let n = x;

do{
    fact *= n;
    n--;
}while(n>0);
console.log(fact);


/* Activity -> 4 : Nested Loops */

// Task_7 - Write a program to print a pattern using nested for loops.

// *
// * *
// * * *
// * * * *
// * * * * *



for(let i=1;i<=5;i++){
    for(let j =1;j<=i;j++){
        console.log(" *");
    }
    console.log("")      //If you want to print in one line then use "process.stdout.write(" *")"
}


/* Activity -> 5 : Loop Control Statements */

// Task_8 - Write a program to print numbers from 1 to 10, but skip the number 5 using the 'continue' statement.

for(let i = 1; i<=10;i++){
    if(i===5){
        continue;
    }
    console.log(i);
}

// Task_9 - Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the 'break' statement.
for(let i = 1; i<=10;i++){
    if(i===7){
        break;
    }
    console.log(i);
}
