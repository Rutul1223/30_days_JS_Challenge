/* Activity -> 1 : Understanding LocalStorage */

// Task_1 - Write a script to save a string value to 'localStorage' and retrive it. Log the retrived value.

const savetoLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
    console.log(`Saved value: ${value}`);
};
const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key);
    console.log(`Retrieved value: ${value}`);
    return value;
};
const key = 'myKey';
const value = 'Hello, World!';
savetoLocalStorage(key, value);
getFromLocalStorage(key);

// Task_2 - Write a script to save an object to 'localStorage' by converting it to a JSON string. Retrieve and parse the object, then log it.

const savObjectToLocalStorage = (key, obj) => {
    const jsonString = JSON.stringify(obj);
    localStorage.setItem(key, jsonString);
    console.log(`Saved object: ${jsonString}`);
}
const objectFromLocalStorage = (key) => {
    const jsonString = localStorage.getItem(key);
    if (jsonString) {
        const obj = JSON.parse(jsonString);
        console.log(`Retrieved object:`, obj);
        return obj;
    } else {
        console.log(`No item found in localStorage with key: ${key}`);
        return null;
    }
};
const key1 = 'myObject';
const obj = {
    name: 'Rutul',
    age: 21,
    occupation: "Software Developer"
};
savObjectToLocalStorage(key1, obj);
getFromLocalStorage(key1);

/* Activity -> 2 : Using LocalStorage */

// Task_3 - Create a simple form that saves user input (e.g., name and email) to 'localStorage' when submitted. Retrieve and display the saved data on page load.

document.addEventListener('DOMContentLoaded', () => {
    const savedDataElement = document.getElementById('savedData');
    const savedName = document.getElementById('name');
    const savedEmail = document.getElementById('email');
    if (savedName && savedEmail) {
        savedDataElement.textContent = `Name: ${savedName}, Email: ${savedEmail}`;
    } else {
        savedDataElement.textContent = `No data saved.`;
    }
    const form = document.getElementById('userForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);

        savedDataElement.textContent = `Name: ${name}, Email:${email}`;
        form.reset();
    });
});

// Task_4 - Write a script to remove an item from 'localStorage'. Log the 'localStorage' content before and after removal.

document.addEventListener('DOMContentLoaded', () => {
    const logLocalStorageContent = () => {
        console.log('Current localStorage content:');
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            console.log(`${key} : ${value}`);
        }
    };
    const removeFromLocalStorage = (key) => {
        console.log(`Removing item with key: ${key}`);
        localStorage.removeItem(key);
    };
    localStorage.setItem('name', 'rutul');
    localStorage.setItem('email', 'rutul@gmail.com');
    console.log("Before removal:");
    logLocalStorageContent();
    removeFromLocalStorage('name');
    console.log('After removal:');
    logLocalStorageContent();
});

/* Activity -> 3 : Understanding SessionStorage */

// Task_5 - Write a script to save a string value to 'sessionStorage' and retrive it. Log the retrived value.

document.addEventListener('DOMContentLoaded', () => {
    const saveToSessionStorage = (key, value) => {
        sessionStorage.setItem(key, value);
        console.log(`Saved Value: ${value}`);;
    };
    const getFromSessionStorage = (key) => {
        const value = sessionStorage.getItem(key);
        console.log(`Retrieved value: ${value}`);
        return value;
    };
    const key = 'myKey';
    const value = 'Hello,World!';

    saveToSessionStorage(key, value);
    getFromSessionStorage(key);
});

// Task_6 - Write a script to save an object to 'sessionStorage' by converting it to a JSON string. Retrieve and parse the object, then log it.

document.addEventListener('DOMContentLoaded', () => {
    const saveObjectToSessionStorage = (key, obj) => {
        const jsonString = JSON.stringify(obj);
        sessionStorage.setItem(key, jsonString);
        console.log(`Saved object: ${jsonString}`);
    };
    const getObjectFromSessionStorage = (key) => {
        const jsonString = sessionStorage.getItem(key);
        if (jsonString) {
            const obj = JSON.parse(jsonString);
            console.log(`Retrieved object:`, obj);
            return obj;
        } else {
            console.log('No object found in sessionStorage for the  given key.');
            return null;
        }
    };
    const key = 'myObject';
    const value = {
        name: 'Rutul',
        email: 'Rutul@gmail.com'
    };
    saveObjectToSessionStorage(key, value);
    getObjectFromSessionStorage(key);
});

/* Activity -> 4 : Using SessionStorage */

// Task_7 - Create a simple form that saves user input (e.g., name and email) to 'sessionStorage' when submitted. Retrieve and display the saved data on page load. 

document.addEventListener('DOMContentLoaded', () => {
    // Function to display saved data
    const displaySavedData = () => {
        const savedDataElement = document.getElementById('savedData1');
        const savedName = sessionStorage.getItem('name1');
        const savedEmail = sessionStorage.getItem('email1');

        if (savedName && savedEmail) {
            savedDataElement.textContent = `Name: ${savedName}, Email: ${savedEmail}`;
        } else {
            savedDataElement.textContent = 'No data saved.';
        }
    };

    // Handle form submission
    const form = document.getElementById('userForm1');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name1').value;
        const email = document.getElementById('email1').value;

        // Save to sessionStorage
        sessionStorage.setItem('name1', name);
        sessionStorage.setItem('email1', email);

        // Update displayed saved data
        displaySavedData();

        // Clear the form
        form.reset();
    });

    // Display saved data on page load
    displaySavedData();
});

// Task_8 - Write a script to remove an item from 'sessionStorage'. Log the 'sessionStorage' content before and after removal.

document.addEventListener('DOMContentLoaded', () => {
    // Function to log all items in sessionStorage
    const logSessionStorageContent = () => {
        console.log('Current sessionStorage content:');
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            const value = sessionStorage.getItem(key);
            console.log(`${key}: ${value}`);
        }
    };

    // Function to remove an item from sessionStorage
    const removeFromSessionStorage = (key) => {
        console.log(`Removing item with key: ${key}`);
        sessionStorage.removeItem(key);
    };

    // Save some example data to sessionStorage
    sessionStorage.setItem('name1', 'test');
    sessionStorage.setItem('email1', 'vaibhav@example.com');

    // Log content before removal
    console.log('Before removal:');
    logSessionStorageContent();

    // Remove an item
    removeFromSessionStorage('name1');

    // Log content after removal
    console.log('After removal:');
    logSessionStorageContent();
});

/* Activity -> 5 : Comparing LocalStorage and SessionStorage */

// Task_9 - Write a function that accepts a key and a value, and saves the value to both 'localStorage' and 'sessionStorage'. Retrieve and log the values from both storage mechanisms.

// Function to save and retrieve values from localStorage and sessionStorage
const saveAndRetrieve = (key, value) => {
    // Save the value to localStorage and sessionStorage
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);

    console.log(`Saved value "${value}" to both localStorage and sessionStorage with key "${key}".`);

    // Retrieve the value from localStorage
    const localStorageValue = localStorage.getItem(key);
    console.log(`Retrieved from localStorage: ${localStorageValue}`);

    // Retrieve the value from sessionStorage
    const sessionStorageValue = sessionStorage.getItem(key);
    console.log(`Retrieved from sessionStorage: ${sessionStorageValue}`);
};

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Save and retrieve a value
    saveAndRetrieve('exampleKey', 'exampleValue');
});

// Task_10 - Write a function that clears all data from both 'localStorage' and 'sessionStorage'. Verify that both storages are empty.

// Function to clear all data from localStorage and sessionStorage
const clearAllStorage = () => {
    // Clear localStorage and sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    console.log('Cleared all data from localStorage and sessionStorage.');

    // Verify that localStorage is empty
    console.log('localStorage content after clearing:');
    if (localStorage.length === 0) {
        console.log('localStorage is empty.');
    } else {
        console.log('localStorage is not empty.');
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            console.log(`${key}: ${localStorage.getItem(key)}`);
        }
    }

    // Verify that sessionStorage is empty
    console.log('sessionStorage content after clearing:');
    if (sessionStorage.length === 0) {
        console.log('sessionStorage is empty.');
    } else {
        console.log('sessionStorage is not empty.');
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            console.log(`${key}: ${sessionStorage.getItem(key)}`);
        }
    }
};

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Clear all storage and verify
    clearAllStorage();
});