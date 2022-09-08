var express = require('express');
var router = express.Router();
const citieRouter = require('./cityRouter')

router.get('/', function(req, res, next) {
  res.render('index', {title: 'My Tinerary'});
});

module.exports = router;
