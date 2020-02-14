//import express
const express = require('express');

//declare router using express
const router = express.Router();

//import data
const Users = require('./userDb.js')
const Posts = require('./posts/postDb.js')

//Users
// Build an API to let clients perform CRUD operations on users.

//Posts
// Add endpoints to retrieve the list of posts for a user and to store a new post for a user.


//add new user
router.post('/', validateUser, (req, res) => {
  // do your magic!
  Users.insert()
  .catch(err => {
    res.status(500).json({errorMessage: "Unable to handle this request"})
  })
});

//post new post by id
router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // do your magic!
  Posts.insert()
    .then(post =>{
      res.status(201).json(post)
    })
    .catch(err => {
      res.status(500).json({errorMessage: "Unable to handle this request"})
    })
});

//get list of all users
router.get('/', (req, res) => {
  // do your magic!
  Users.get()
    .then()
    .catch(err => {
      res.status(500).json({errorMessage: "Unable to handle this request"})
    })

});

//get user by id
router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  const { id } = req.params
  Users.getById
  .catch(err => {
    res.status(500).json({errorMessage: "Unable to handle this request"})
  })
});

//get posts by user
router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
  .catch(err => {
    res.status(500).json({errorMessage: "Unable to handle this request"})
  })
});

//delete user
router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
  .catch(err => {
    res.status(500).json({errorMessage: "Unable to handle this request"})
  })
});

//edit user
router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
  .catch(err => {
    res.status(500).json({errorMessage: "Unable to handle this request"})
  })
});




//custom middleware
function validateUserId(req, res, next) {
  // do your magic!

  const { id } = req.params

  Users.getById(id)
    .then(user => {
      // if the id parameter is valid, store that user object as req.user
      if (user === undefined){
        res.status(404).json({errorNessage: "invalid user ud"})
      }else{
      req.user = user
      next();
      }
    })
    .catch(err => {
      res.status(500).json({errorMessage: "Unable to handle this request"})
    })
//   validateUserId validates the user id on every request that expects a user id parameter
// if the id parameter is valid, store that user object as req.user
// if the id parameter does not match any user id in the database, cancel the request and respond with status 400 and { message: "invalid user id" }

}

function validateUser(req, res, next) {
  // do your magic!
  const payload = req.body

  if (!payload) {
    res.status(400).json({errorMessage: "missing user data"})
  } else if (!payload.name) {
    res.status(400).json({errorMessage: "missing required name field"})
  } else {
    Users.insert(payoad)
      .then(user => {
        req.body = user;
        next();
      })
      .catch(err => {
        res.status(500).json({errorMessage: "Unable to handle this request"})
      })
  }

//   validateUser validates the body on a request to create a new user
// if the request body is missing, cancel the request and respond with status 400 and { message: "missing user data" }
// if the request body is missing the required name field, cancel the request and respond with status 400 and { message: "missing required name field" }

}

function validatePost(req, res, next) {
  const payload = req.body

  if (!payload) {
    res.status(400).json({errorMessage: "missing post data"})
  } else if (!payload.text) {
    res.status(400).json({errorMessage: "missing required text field"})
  } else {
  Posts.insert(payload)
    .then(post => {
      req.post = post;
      next();
    })
    .catch(err => {
      res.status(500).json({errorMessage: "Unable to handle this request"})
    })
  }
  // validatePost validates the body on a request to create a new post
  // if the request body is missing, cancel the request and respond with status 400 and { message: "missing post data" }
  // if the request body is missing the required text field, cancel the request and respond with status 400 and { message: "missing required text field" }
  }



module.exports = router;
