import { Server } from 'ws';
import express from 'express'
import { randomInt } from 'node:crypto';

const port = process.env.PORT || 3000;

const wss = new Server({ port: 8080 });
const app = express();

const words = {
    "adjectives":["flying", "flipping","fried"],
    "fish":["salmon","tuna","bass","haddock"]
}

wss.on('connection', (client_ws) => {
    client_ws.send("Hello World");
    console.log(client_ws.url);
});