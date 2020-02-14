//import express
const express = require('express');

//declare server using express
const server = express();

//import data from users/posts
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

//declare routes/endpoints
server.use("/api/users", userRouter)
server.use("/api/posts", postRouter)

//tell server how to handle incoming requests (as JSON objects)
server.use(express.json())

//tell server to use custom middleware
server.use(logger);

//code from project clone
server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware - global
function logger(req, res, next) {
    console.log(`${req.method}, Request to ${req.originalUrl}, at ${Date.now}`);
  
    next();
  // logger logs to the console the following information about each request: request method, request url, and a timestamp
  // this middleware runs on every request made to the API
}

//export
module.exports = server;