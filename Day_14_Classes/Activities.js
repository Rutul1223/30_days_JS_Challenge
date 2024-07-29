/* Activity -> 1 : Class Definition */

// Task_1 - Define a class 'person' with properties 'name','age' and a method to return a greeting message. Create an instance of the class and log the greeting message.
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreeeting() {
        return `Hello!! my name  is ${this.name} and  i am ${this.age} years old.`
    }
}
const personInstance = new person("Rutul", 18);
console.log(personInstance.getGreeeting())

// Task_2 - Add a method to the 'person' class that updates the age property and logs the updated age.

class person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreeeting() {
        return `Hello!! my name  is ${this.name} and  i am ${this.age} years old.`
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`The updated age is ${this.age}`);
    }
}
const person1Instance = new person1("Rutul", '18');
console.log(person1Instance.getGreeeting());
person1Instance.updateAge(21);

/* Activity -> 2 : Class Inheritance */

// Task_3 - Define a class 'student' that  extends the person class. Add a property 'studentId' and a method to return the student ID. create an instance of the 'student' class and log the student ID.

class person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreeeting() {
        return `Hello!! my name  is ${this.name} and  i am ${this.age} years old.`
    }
    updateAge(newAge) {
        this.age = newAge;
        console.log(`The updated age is ${this.age}`);
    }
}

class student extends person2 {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getStudentId() {
        return `My Student ID is ${this.studentId}`;
    }
}
const studentInstance = new student('Rutul', 21, 'SID1120');
console.log(studentInstance.getStudentId());

// Task_4 - Override the greeting method in the 'student' class to include the student ID in the message. Log the overridden greeting message.

class person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreeeting() {
        return `Hello!! my name  is ${this.name} and  i am ${this.age} years old.`
    }
}
class student1 extends person3 {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
    getGreeeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}
const studentInstance1 = new student1('Rutul', 21, 'SID1120');
console.log(studentInstance1.getGreeeting());

/* Activity -> 3 : Static Methods and Properties */

// Task_5 - Add a static method to the 'person' class that returns a generic greeting message. Call this static method without creating an instance of class and log the message.

class Person4 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static getGenericGreeting() {
        return 'Hello, this is a generic greeting message.';
    }
}
console.log(Person4.getGenericGreeting());

// Task_6 - Add a static property to the 'student' class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

class Person5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    static getGenericGreeting() {
        return 'Hello, this is a generic greeting message.';
    }
}

class Student3 extends Person5 {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student3.studentCount++;
        console.log(`Total number of students: ${Student3.studentCount}`);
    }

    getGreeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
}

const student2 = new Student3('Vaibhav', 22, 'SID12345');
const student3 = new Student3('Rutul', 22, 'SID1120');
console.log(student2.getGreeting());
console.log(student3.getGreeting());

/* Activity -> 4 : Getters and Setters */

// Task_7 - Add a getter method to the 'person' class to return the full name (assume a  firstName and lastName property). Create an instance and log the full name using the getter.

class Person6 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getGreeting() {
        return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
}
const personInstance2 = new Person6('Rutul', 'Morningstar', 21);
console.log(personInstance2.fullName);
console.log(personInstance2.getGreeting());

// Task_8 - Add a setter method to the 'person' class to update the name properties (firstName and lastName) Update the name using the setter and log the updated full name.

class Person7 {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const personInstance3 = new Person7('Rutul', 'Morningstar', 21);
console.log(personInstance3.fullName);
personInstance3.fullName = 'Vaibhav Jethava';
console.log(personInstance3.fullName);

/* Activity -> 5 : Private Fields (Optional) */

// Task_9 - Define a class 'Account' with private fields for 'balance' and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Insufficient balance or invalid withdrawal amount.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}


const myAccount = new Account(100);
myAccount.deposit(50);
myAccount.withdraw(30);
myAccount.withdraw(150);
console.log(`Final balance: $${myAccount.getBalance()}`);

// Task_10 - Create an instance of the 'Account' class and test the deposit and withdraw methods, logging the balance after each operation.

class Account1 {
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Insufficient balance or invalid withdrawal amount.');
        }
    }

    getBalance() {
        return this.#balance;
    }
}
const myAccount1 = new Account1(100);
console.log(`Initial balance: $${myAccount1.getBalance()}`);
myAccount1.deposit(50);
console.log(`Balance after deposit: $${myAccount1.getBalance()}`);
myAccount1.withdraw(30);
console.log(`Balance after withdrawal: $${myAccount1.getBalance()}`);
myAccount1.withdraw(150);
console.log(`Balance after attempting to overdraw: $${myAccount1.getBalance()}`);
console.log(`Final balance: $${myAccount1.getBalance()}`);