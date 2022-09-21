var express = require('express');
var router = express.Router();
const passport = require ('../config/passport')

const {createComment, readAll} = require('../controllers/commentController')

router.get('/query', readAll)
router.post('/', passport.authenticate('jwt',{session:false}), createComment)


module.exports = router;