var express = require('express');
const passport = require('../config/passport');
var router = express.Router();

const { createItinerary, modifItinerary, deleteItinerary, readAll, like} = require('../controllers/itinerariController')

router.get('/query', readAll)
router.patch('/likes/:id', passport.authenticate('jwt', {session:false}), like)
router.post('/', createItinerary)
router.patch('/:id', modifItinerary)
router.delete('/:id', deleteItinerary)


module.exports = router;
