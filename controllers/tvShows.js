const express = require('express');
const tvShowRouter = new express.Router();

let tvShows = ["Ozark", "Game of Thrones", "Always Sunny in Philedelphia", "Rick and Morty", "Firefly"];

//Show a TV Show
tvShowRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json({date: tvShows[index]});
})

//Show all TV Shows
tvShowRouter.get('/', function(req, res){
  res.json(tvShows);
})

//Create a new TV Show
tvShowRouter.post('/', function(req, res){
  tvShows.push(req.body.tvshow);
  res.json(tvShows);
})

//Update a TV Show
tvShowRouter.put('/:id', function(req, res){
  let index = req.params.id;
  tvShows[index] = req.body.tvshow;
  res.json({data: tvShows});
})
//Delete a TV Show
tvShowRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  tvShows.splice(index, 1);
  res.json({data: tvShows});
})

module.exports = tvShowRouter;
