const express = require('express');
const starRouter = new express.Router();

let tvStars = ["Kit Harrington", "Justin Roiland", "Nathan Fillion", "Danny DeVito", "Jason Bateman"];

//Show a TV Star

//Show all TV Stars
starRouter.get('/', function(req, res){
  res.json(tvStars);
})

//Create a new TV Star

//Update a TV Star

//Delete a TV Star

module.exports = starRouter;
