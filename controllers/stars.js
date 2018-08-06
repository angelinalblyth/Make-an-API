const express = require('express');
const starRouter = new express.Router();

let tvStars = ["Kit Harrington", "Justin Roiland", "Nathan Fillion", "Danny DeVito", "Jason Bateman"];

//Show a TV Star
starRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json({data: tvStars[index]});
})

//Show all TV Stars
starRouter.get('/', function(req, res){
  res.json(tvStars);
})

//Create a new TV Star
starRouter.post('/', function(req, res){
  tvStars.push(req.body.tvstar);
  res.json(tvStars);
})

//Update a TV Star
starRouter.put('/:id', function(req, res){
  let index = req.params.id;
  tvStars[index] = req.body.tvstar;
  res.json({data: tvStars});
})
//Delete a TV Star

module.exports = starRouter;
