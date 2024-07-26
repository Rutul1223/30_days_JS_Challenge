/* Activity -> 1 : Understanding Promises */

// Task_1 - Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is the resolved message after 2 seconds");
    }, 2000);
});
promiseOne.then(message => {
    console.log(message);
});

// Task_2 - Create a promise that rejects with an error message after a 2-second timeout and handle the error using '.catch()'.

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("something wents wrong");
    }, 2000);
});
promiseTwo.catch(message => {
    console.log(message);
});

/* Activity -> 2 : Chaining Promises */

// Task_3 - Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchData = (step) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Data from step ${step}`);
    }, 1000 * step);
});
fetchData(1).then(data1 => {
    console.log(data1);
    return fetchData(2);
}).then(data2 => {
    console.log(data2);
    return fetchData(3);
}).then(data3 => {
    console.log(data3);
}).catch(error => {
    console.error('Error:', error);
});

/* Activity -> 3 : Using Async/Await */

// Task_4 - Write an async function that waits for a promise to resolve and then logs the resolved value.

const forAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Fetched data");
    }, 2000);
});
const fetchAndLog = async () => {
    try {
        const logData = await forAsync
        console.log(logData);
    } catch (error) {
        console.log('E:', error);
    }
}
fetchAndLog();

// Task_5 - Write an async function that handles a rejected promise using try-catch and logs the error message.

const forAsync5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Fetcheing data have some error!!");
    }, 2000);
});
const fetchAndHandleError = async () => {
    try {
        const logData = await forAsync5
        console.log(logData);
    } catch (error) {
        console.log('E:', error);
    }
}
fetchAndHandleError();

/* Activity -> 4 : Fetching data from an API */

// Task_6 - Use the 'fetch' API to get data from a public API and log the response data to the console using promises.
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
fetch(apiUrl).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There has been a problem with your fetch operation:', error);
});

// Task_7 - Use the 'fetch' API to get data from a public API and log the response data to the console using async/await.
const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/1';
const fetchApi2 = async () => {
    try {
        const response = await fetch(apiUrl2);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('ERROR:', error);
    }
};
fetchApi2();

// Task_8 - Use the 'Promise.all' to wait for multiple promises to resolve and then log all their values.
const apiUrls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];
const fetchData8 = (url) => fetch(url).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
});
Promise.all(apiUrls.map(url => fetchData8(url))).then(results => {
    results.forEach((data, index) => {
        console.log(`Data from URL ${index+1}:`, data);
    });
}).catch(error => {
    console.error("fetch Error:", error);
});

// Task_9 - Use the 'Promise.race' to log the value of the first promise that resolves among multiple promises.

const apiUrls1 = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];
const fetchData4 = (url) => fetch(url).then(response => {
    if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    return response.json();
});
Promise.race(apiUrls1.map(url => fetchData4(url)))
    .then(result => {
        console.log('First resolved data:', result);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });