/* Activity -> 1 : Object Creation and Access */

// Task_1 - Create an object representing a book with properties like title, author and year and log the object to the console.

let book1 = {
    title: "Bhagvad Gita",
    author: "Ved Vyas",
    year: "between 400 BCE and 200 CE"
}
console.log(book1);

// Task_2 - Access and log the title and author properties of the book object.

let book2 = {
    title: "Bhagvad Gita",
    author: "Ved Vyas",
    year: "between 400 BCE and 200 CE"
}
console.log(`tittle : ${book2.title} and author : ${book2.author}`);

/* Activity -> 2 : Object Methods */

// Task_3 - Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.

let book3 = {
    title: "Bhagvad Gita",
    author: "Ved Vyas",
    year: "between 400 BCE and 200 CE",
    getDetails: function(){
        return `${this.title} by ${this.author}`;
    }
}
console.log(book3.getDetails());

// Task_4 - Add a method to the book object that takes a parameter (year)and update's the book's year property then log the updated object.

let book4 = {
    title: "Bhagvad Gita",
    author: "Ved Vyas",
    year: "between 400 BCE and 200 CE",
    updateYear: (newYear)=>{
        book4.year = newYear;
    }
}
book4.updateYear(2024)
console.log(book4);

/* Activity -> 3 : Nested Objects */

// Task_5 - Create a nested object representing a library with properties like name and books (an array of book objects) and log the library object to the console.

let book = {
    title: "Bhagvad Gita",
    author: "Ved Vyas",
    year: "between 400 BCE and 200 CE"
}
let book6 = {
    title: "Ramayana",
    author: "Valmiki",
    year: "approximately 200 B.C.E."
}
let library = {
    name: "Rutul",
    books: [book,book6]
}
console.log(library);

// Task_6 - Access and log the name of the library and the titles of all books in the library.

console.log(`library name : ${library.name}`);
library.books.forEach((book)=>{
    console.log(`${book.title}`);
})

/* Activity -> 4 : The 'this' Keyword */

// Task_7 - Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year and log the result of calling this method.

const book7 ={
    title: "Bhagvad Gita",
    author: "Ved Vyas",
    year: "between 400 BCE and 200 CE",
    getDetails: function(){
        return `${this.title} by ${this.author}`;
    },
    updateYear: (newYear)=>{
        book4.year = newYear;
    },
    getTitleAndYear: function () {
        return `${this.title} was published in ${this.year}`;
    },
}
const buk7 ={
    title: "Ramayana",
    author: "Valmiki",
    year: "aproximately 200 B.C.E.",
    getDetails: function(){
        return `${this.title} by ${this.author}`;
    },
    updateYear: (newYear)=>{
        book4.year = newYear;
    },
    getTitleAndYear: function () {
        return `${this.title} was published in ${this.year}`;
    },
}
const library2 = {
    name : "Rutul",
    book:[book7,buk7],
}
console.log(`${book7.getTitleAndYear()}  ${buk7.getTitleAndYear()}`);

/* Activity -> 5 : Object Iteration */

// Task_8 - Use a 'for...in' loop to iterate over the properties of book object and log the each property and its value.

const book8 ={
    title: "Bhagvad Gita",
    author: "Ved Vyas",
    year: "between 400 BCE and 200 CE",
    getDetails: function(){
        return `${this.title} by ${this.author}`;
    },
    updateYear: (newYear)=>{
        book4.year = newYear;
    },
    getTitleAndYear: function () {
        return `${this.title} was published in ${this.year}`;
    },
}
for(let key in book8){
    if(book8.hasOwnProperty(key)){
        if(typeof book8[key] === "function"){
            console.log(`${key}:[function]`);
        }else{
            console.log(`${key}: ${book8[key]}`);
        }
    }
}

// Task_9 - Use 'Object.keys' and 'Object.values' methods to log all the keys and values of the book object.

const book9 ={
    title: "Bhagvad Gita",
    author: "Ved Vyas",
    year: "between 400 BCE and 200 CE",
    getDetails: function(){
        return `${this.title} by ${this.author}`;
    },
    updateYear: (newYear)=>{
        book4.year = newYear;
    },
    getTitleAndYear: function () {
        return `${this.title} was published in ${this.year}`;
    },
}
const keys = Object.keys(book9);
console.log("keys:");
keys.forEach((key)=>console.log(key));

const values = Object.values(book9);
console.log("values:");
values.forEach((value)=>{
    if(typeof value==="function"){
        console.log("[Function]");
    }else{
        console.log(value);
    }
});
