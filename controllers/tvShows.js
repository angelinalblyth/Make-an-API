const express = require('express');
const tvShowRouter = new express.Router();

let tvShows = ["Ozark", "Game of Thrones", "Always Sunny in Philedelphia", "Rick and Morty", "Firefly"];

//Show a TV Show

//Show all TV Shows
tvShowRouter.get('/', function(req, res){
  res.json(tvShows);
})

//Create a new TV Show

//Update a TV Show

//Delete a TV Show

module.exports = tvShowRouter;
