var express = require('express');
var router = express.Router();
const passport = require ('../config/passport')

const {create, readId, modify, deletecity, readAll, citiesAll} = require('../controllers/cityController')

router.get('/', readAll)
router.get('/', citiesAll)
router.post('/',passport.authenticate('jwt',{session:false}), create)
router.get('/:id', readId)
router.patch('/:id',passport.authenticate('jwt',{session:false}), modify)
router.delete('/:id',passport.authenticate('jwt',{session:false}), deletecity)

module.exports = router;
