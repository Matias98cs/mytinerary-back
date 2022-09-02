var express = require('express');
var router = express.Router();

const { createItinerary, modifItinerary} = require('../controllers/itinerariController')

router.post('/', createItinerary)
router.patch('/:id', modifItinerary)

module.exports = router;
