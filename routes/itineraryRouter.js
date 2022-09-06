var express = require('express');
var router = express.Router();

const { createItinerary, modifItinerary, deleteItinerary, readFromCity} = require('../controllers/itinerariController')

router.post('/', createItinerary)
router.get('/:id', readFromCity)
router.patch('/:id', modifItinerary)
router.delete('/:id', deleteItinerary)


module.exports = router;
