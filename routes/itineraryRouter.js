var express = require('express');
var router = express.Router();

const { createItinerary, modifItinerary, deleteItinerary, readAll} = require('../controllers/itinerariController')

router.get('/query', readAll)
router.post('/', createItinerary)
router.patch('/:id', modifItinerary)
router.delete('/:id', deleteItinerary)


module.exports = router;
