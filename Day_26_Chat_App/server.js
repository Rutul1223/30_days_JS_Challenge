const express = require('express');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '/public')));

// Start the HTTP server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Create the WebSocket server
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('New client connected!');

    ws.on('message', (data) => {
        const { username, message } = JSON.parse(data);
        console.log(`Received from ${username}: ${message}`);

        // Broadcast the received message to all clients
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ username, message }));
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.send(JSON.stringify({ username: 'Server', message: 'Welcome to the chat server!' }));
});

console.log(`WebSocket server is running on ws://localhost:${port}`);