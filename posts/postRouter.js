//import express
const express = require('express');

//declare router using express
const router = express.Router();

//import data
const Posts = require('./postDb.js')

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
  const { id } = req.params
}

module.exports = router;
