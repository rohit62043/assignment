const fs = require("fs")
console.log("Hello World")

const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("HELLO");
});

//middleware
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 5,
});

//applying rate limiter to /data route
app.use('/data', limiter);

app.post('/data', (req, res) => {
    console.log('Request Body : ', req.body);
    console.log('Raw Body : ', req.rawBody);
    res.send('Received sucessfully.');
})

app.listen(port, () => {
    console.log('Server is Listining!');
})
// Goal
// Create an express server that listens on port 3000

// add a post route that logs the request body and the raw body to the console
// add a rate limiter to the post route that only allows 5 requests per minute from the same IP address