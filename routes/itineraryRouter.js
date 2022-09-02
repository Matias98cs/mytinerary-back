var express = require('express');
var router = express.Router();

const { createItinerary } = require('../controllers/itinerariController') 
router.post('/itineraries', createItinerary)