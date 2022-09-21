var express = require('express');
const passport = require('../config/passport');
var router = express.Router();

const { createItinerary, modifItinerary, deleteItinerary, readAll, like, findItinerary} = require('../controllers/itinerariController')

router.get('/query', readAll)
router.get('/finditinerary/:id', findItinerary)
router.patch('/likes/:id', passport.authenticate('jwt', {session:false}), like)
router.post('/', createItinerary)
router.patch('/:id', modifItinerary)
router.delete('/:id', deleteItinerary)


module.exports = router;
