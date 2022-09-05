var express = require('express');
var router = express.Router();

const { createItinerary, modifItinerary, deleteItinerary} = require('../controllers/itinerariController')

router.post('/', createItinerary)
router.patch('/:id', modifItinerary)
router.delete('/:id', deleteItinerary)


module.exports = router;
