var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([]);
});


// htpp://localhost:3001/123
//parametro de la URL
router.get('/:id', function(req, res, next) {
  res.json({
    id: req.params.id
  });
});

module.exports = router;
