var express = require('express');
var router = express.Router();
const passport = require ('../config/passport')

const {createComment, readAll, modifyComment, deleteCommnet} = require('../controllers/commentController');
const { route } = require('./itineraryRouter');

router.get('/query', readAll)
router.post('/', passport.authenticate('jwt',{session:false}), createComment)
router.patch('/:id', passport.authenticate('jwt', {session:false}), modifyComment) 
router.delete('/:id', passport.authenticate('jwt', {session:false}), deleteCommnet )

module.exports = router;