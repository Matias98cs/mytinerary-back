var express = require('express');
var router = express.Router();
const citieRouter = require('./city')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'My Tinerary'});
});

router.use('/cities', citieRouter)

module.exports = router;
