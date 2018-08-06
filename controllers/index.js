const express = require('express');
const router = new express.Router();

router.use('/tvshows', require('./tvshows'));

router.use('/tvstars', require('./stars'));

router.get('/', function(req, res){
  res.json({date: "Go away"});
});

router.get('/about', function(req, res){
  res.json({date: "quick site/api on tv shows and their stars"});
});

module.exports = router;
