var express = require('express');
var router = express.Router();

//me traigo una propiedad del objeto
const {create, read} = require('../controllers/cityController')

// me traigo todo el objeto
// const cityController = require('../controllers/cityController')
// const createController = cityController.create

router.post('/', create)
router.get('/:id', read)

module.exports = router;
