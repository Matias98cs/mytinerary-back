var express = require('express');
const passport = require('../config/passport');
var router = express.Router();

const {signUp, verifyMail, singIn, singOut, veryToken} = require('../controllers/userController')

router.post('/signup', signUp)
router.post('/signin', singIn)
router.post('/signout', singOut)
router.get('/verify/:code', verifyMail)
router.get('/token', passport.authenticate('jwt', {session: false}), veryToken)

module.exports = router;