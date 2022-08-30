var express = require('express');
var router = express.Router();

//me traigo una propiedad del objeto
const {create, read, modify, deletecity, readAll} = require('../controllers/cityController')

// me traigo todo el objeto
// const cityController = require('../controllers/cityController')
// const createController = cityController.create

router.post('/', create)
router.get('/all', readAll)
router.get('/:id', read)
router.put('/:id', modify)
router.delete('/:id', deletecity)

module.exports = router;
