/* Activity -> 1 : Basic Error Handling with Try-Catch */

// Task_1 - Write a function that intetionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

const throwErrorFunction = () => {
    throw new Error("Intentional error");
};
const handleErrorFunction = () => {
    try {
        throwErrorFunction();
    } catch (error) {
        console.error("An eror occured:", error.message);
    }
};
handleErrorFunction();

// Task_2 - Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error. 

const Dividant = (a, b) => {
    if (b === 0) {
        throw new Error("Division by 0 is not allowed");
    }
    return a / b;
};
const divide = (a, b) => {
    try {
        const result = Dividant(a, b);
        console.log("Result:", result);
    } catch (error) {
        console.error("An error Occured:", error.message);
    }
};
divide(50, 2);
divide(10, 0);

/* Activity -> 2 : Finally Block */

// Task_3 - Write a script that includes a try-catch block and a finally-block. Log messages in the try-catch and finally blocks to observe the execution flow.

const performOperation = () => {
    try {
        console.log("In the try block.");

        // Simulating an error
        throw new Error("An intentional error occurred.");

    } catch (error) {
        console.log("In the catch block.");
        console.error("Error message:", error.message);
    } finally {
        console.log("In the finally block.");
    }
};
performOperation();

/* Activity -> 3 : Custom Error Objects */

// Task_4 - Create a custom error class that extends the buit-in Error class.Throw an instance of this custom error in a function and handle it using a try-catch block.

class customError extends Error {
    constructor(message) {
        super(message);
        this.name = "customError";
    }
}
const throwCustomError = () => {
    throw new customError("this is a custom error messasge");
}
try {
    throwCustomError();
} catch (error) {
    if (error instanceof customError) {
        console.error("Caught a custom error:", error.message);
    } else {
        console.error("Caught an unexpected error:", error);
    }
} finally {
    console.log("Execution reachedthe  finally back");
}

// Task_5 - Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
const validateInput = (input) => {
    if (!input || input.trim() === "") {
        throw new ValidationError("Input cannot be empty.");
    }
    return true;
};
const handleValidation = (input) => {
    try {
        validateInput(input);
        console.log("Input is valid.");
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("Validation error:", error.message);
        } else {
            console.error("An unexpected error occurred:", error);
        }
    } finally {
        console.log("Validation check completed.");
    }
};
handleValidation("Valid input");
handleValidation("");

/* Activity -> 4 : Error Handling in Promises */

// Task_6 - Create a promise that randomly resolves or rejects. Use '.catch()' to handle the rejection and log an appropriate message to the console.

const randomPromise = () => {
    return new Promise((resolve, reject) => {
        const outcome = Math.random() > 0.4;
        setTimeout(() => {
            if (outcome) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected.");
            }
        }, 1000);
    });
};
randomPromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// Task_7 - Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects and logs the error message.

const randomPromise1 = () => {
    return new Promise((resolve, reject) => {
        const outcome = Math.random() > 0.4;

        setTimeout(() => {
            if (outcome) {
                resolve("Promise resolved successfully!");
            } else {
                reject("Promise rejected.");
            }
        }, 1000);
    });
};
const handlePromise = async () => {
    try {
        const result = await randomPromise1();
        console.log(result); 
    } catch (error) {
        console.error("Error:", error); 
    }
};
handlePromise();

/* Activity -> 5 : Graceful Error Handling in Fetch */

// Task_8 - Use the 'fetch' API to request data from an invalid URL and handle the error using '.catch()'.Log an appropriate error message to the console.

const fetchData = () => {
    fetch('https://invalid-url.example.com')
        .then(response => {
            if (!response.ok) {
                return Promise.reject('Failed to fetch data: ' + response.statusText);
            }
            return response.json(); 
        })
        .then(data => {
            console.log('Data received:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
fetchData();
