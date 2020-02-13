//import express
const express = require('express');

//declare router using express
const router = express.Router();

//import data
const Users = require('./userDb.js')

//Users
// Build an API to let clients perform CRUD operations on users.

//add new user
router.post('/', (req, res) => {
  // do your magic!
});

//post new post by id
router.post('/:id/posts', (req, res) => {
  // do your magic!
});

//get list of all users
router.get('/', (req, res) => {
  // do your magic!
});

//get user by id
router.get('/:id', (req, res) => {
  // do your magic!
});

//get posts by user
router.get('/:id/posts', (req, res) => {
  // do your magic!
});

//delete user
router.delete('/:id', (req, res) => {
  // do your magic!
});

//edit user
router.put('/:id', (req, res) => {
  // do your magic!
});




//custom middleware
function validateUserId(req, res, next) {
  // do your magic!

  const { id } = req.params

//   validateUserId validates the user id on every request that expects a user id parameter
// if the id parameter is valid, store that user object as req.user
// if the id parameter does not match any user id in the database, cancel the request and respond with status 400 and { message: "invalid user id" }

}

function validateUser(req, res, next) {
  // do your magic!
  const payload = req.body
  if (!req.body) res.status(400).json({errorMessage: "missing user data"})
  if (!req.body.name) res.status(400).json({errorMessage: "missing required name field"})

//   validateUser validates the body on a request to create a new user
// if the request body is missing, cancel the request and respond with status 400 and { message: "missing user data" }
// if the request body is missing the required name field, cancel the request and respond with status 400 and { message: "missing required name field" }
}


function validatePost(req, res, next) {
  const payload = req.body


  // validatePost validates the body on a request to create a new post
  // if the request body is missing, cancel the request and respond with status 400 and { message: "missing post data" }
  // if the request body is missing the required text field, cancel the request and respond with status 400 and { message: "missing required text field" }
  }



module.exports = router;
