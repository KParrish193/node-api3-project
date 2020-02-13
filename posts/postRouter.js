//import express
const express = require('express');

//declare router using express
const router = express.Router();

//import data
const Posts = require('./postDb.js')

//Posts
// Add endpoints to retrieve the list of posts for a user and to store a new post for a user.

//endpoints
router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});






// custom middleware
function validatePostId(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {

  // validatePost validates the body on a request to create a new post
  // if the request body is missing, cancel the request and respond with status 400 and { message: "missing post data" }
  // if the request body is missing the required text field, cancel the request and respond with status 400 and { message: "missing required text field" }
  }

module.exports = router;
