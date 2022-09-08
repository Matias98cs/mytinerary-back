var express = require('express');
var router = express.Router();

const {create, readId, modify, deletecity, readAll, citiesAll} = require('../controllers/cityController')

router.get('/', readAll)
router.get('/', citiesAll)
router.post('/', create)
router.get('/:id', readId)
router.patch('/:id', modify)
router.delete('/:id', deletecity)

module.exports = router;
