var express = require('express');
var router = express.Router();

//me traigo una propiedad del objeto
const {create, readId, modify, deletecity, readAll, citiesAll} = require('../controllers/cityController')

// me traigo todo el objeto
// const cityController = require('../controllers/cityController')
// const createController = cityController.create

router.get('/', readAll)
router.get('/', citiesAll)
router.post('/', create)
router.get('/:id', readId)
router.put('/:id', modify)
router.delete('/:id', deletecity)

module.exports = router;
