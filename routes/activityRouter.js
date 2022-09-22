var express = require('express');
var router = express.Router();
const passport = require('../config/passport')

const {createActivity, readAll, updateActivity} = require('../controllers/activityController')

router.get('/query', readAll)
router.post('/',passport.authenticate('jwt',{session:false}), createActivity)
router.patch('/update-activity/:id',passport.authenticate('jwt',{session:false}), updateActivity)

module.exports = router;