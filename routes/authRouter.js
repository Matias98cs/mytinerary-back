var express = require('express');
var router = express.Router();

const {signUp, verifyMail, singIn} = require('../controllers/userController')

router.post('/signUp', signUp)
router.post('/signin', singIn)
router.get('/verify/:code', verifyMail)

module.exports = router;