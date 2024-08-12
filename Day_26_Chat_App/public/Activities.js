/* Activity -> 1 : Setting Up the Project */

// Task_1 - Initialize a new project directory and set up the basic HTML structure for the chat application.

// Answer :- Explore index.html file

// Task_2 - Add a basic CSS file to style the chat application, including a chat window and input area.

// Answer :- Explore styles.css file

/* Activity -> 2 : Setting Up WebSocket Server */

// Task_3 - Set up a simple WebSocket server using Node.js and the 'ws' library. Write a script to create the server and handle connections.

// Answer :- Refer server.js file 

// Task_4 - Test the WebSocket server by logging messages when clients connect and disconnect.

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('chat-form');
//     const messageInput = document.getElementById('message-input');
//     const messages = document.getElementById('messages');

//     const ws = new WebSocket('ws://localhost:3000');

//     ws.onopen = () => {
//         console.log('Connected to the WebSocket server');
//     };

//     ws.onmessage = (event) => {
//         const messageElement = document.createElement('div');
//         messageElement.textContent = event.data;
//         messages.appendChild(messageElement);
//         messages.scrollTop = messages.scrollHeight;
//     };

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const messageText = messageInput.value.trim();
//         if (messageText) {
//             ws.send(messageText);
//             messageInput.value = '';
//         }
//     });
// });

/* Activity -> 3 : Establishing WebSocket Connection */

// Task_5 - Add a script to the HTML file to establish a WebSocket connection to the server.

// Answer :- Refer Task_4 is same 

// Task_6 - Write functions to handle sending and receiving messages through the WebSocket connection. Log received messages to the console.

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('chat-form');
//     const messageInput = document.getElementById('message-input');
//     const messages = document.getElementById('messages');

//     // Initialize WebSocket connection
//     const ws = initializeWebSocket();

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const messageText = messageInput.value.trim();
//         if (messageText) {
//             sendMessage(ws, messageText);
//             messageInput.value = '';
//         }
//     });
// });

// // Function to initialize the WebSocket connection
// const initializeWebSocket = () => {
//     const ws = new WebSocket('ws://localhost:3000');

//     ws.onopen = () => {
//         console.log('Connected to the WebSocket server');
//     };

//     ws.onmessage = (event) => {
//         handleIncomingMessage(event.data);
//     };

//     ws.onclose = () => {
//         console.log('Disconnected from the WebSocket server');
//     };

//     ws.onerror = (error) => {
//         console.error('WebSocket error:', error);
//     };

//     return ws;
// };

// // Function to send a message through the WebSocket connection
// const sendMessage = (ws, message) => {
//     if (ws && ws.readyState === WebSocket.OPEN) {
//         ws.send(message);
//         console.log('Sent message:', message);
//     } else {
//         console.error('WebSocket is not open. Ready state:', ws.readyState);
//     }
// };

// // Function to handle incoming messages from the WebSocket connection
// const handleIncomingMessage = (message) => {
//     console.log('Received message:', message);

//     const messageElement = document.createElement('div');
//     messageElement.textContent = message;
//     const messages = document.getElementById('messages');
//     messages.appendChild(messageElement);
//     messages.scrollTop = messages.scrollHeight;
// };

/* Activity -> 4 : Building the Chat Interface */

// Task_7 - Modify the HTML structure to include a chat window and an input area for typing messages. style the chat window and input area using CSS.

// Answer :- Explore index.html styles.css file

// Task_8 - Write a function to display received messages in the chat window. Add event listeners to send messages when the user presses enter or clicks a send button.

// Answer :- Refer Task_6 is same 

/* Activity -> 5 : Enhancing the Chat Application */

// Task_9 - Add user authentication to the chat application. Allow users to enter a username before joining the chat. Display usernames alongside their messages in the chat window.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');
    const messages = document.getElementById('messages');
    const usernameSection = document.getElementById('username-section');
    const usernameInput = document.getElementById('username-input');
    const joinButton = document.getElementById('join-button');

    let ws;
    let username = '';

    // Event listener for the "Join Chat" button
    joinButton.addEventListener('click', () => {
        username = usernameInput.value.trim();
        if (username) {
            usernameSection.style.display = 'none';
            form.style.display = 'flex';
            ws = initializeWebSocket();
        } else {
            alert('Please enter a username');
        }
    });

    // Function to initialize the WebSocket connection
    const initializeWebSocket = () => {
        const ws = new WebSocket('ws://localhost:3000');

        ws.onopen = () => {
            console.log('Connected to the WebSocket server');
        };

        ws.onmessage = (event) => {
            handleIncomingMessage(event.data);
        };

        ws.onclose = () => {
            console.log('Disconnected from the WebSocket server');
        };

        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return ws;
    };

    // Function to send a message through the WebSocket connection
    const sendMessage = (message) => {
        if (ws && ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ username, message }));
            console.log('Sent message:', message);
        } else {
            console.error('WebSocket is not open. Ready state:', ws.readyState);
        }
    };

    // Function to handle incoming messages from the WebSocket connection
    const handleIncomingMessage = (data) => {
        const { username, message } = JSON.parse(data);
        console.log('Received message:', message);

        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    };

    // Event listener for the chat form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText) {
            sendMessage(messageText);
            messageInput.value = '';
        }
    });
});

// Task_10 - Add CSS styles to differentiate messages sent by different users. Add CSS animations or transations to make the chat application more interactive and visually appealing.

// Answer :- Explore index.html styles.css file