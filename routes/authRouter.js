var express = require('express');
var router = express.Router();

const {signUp,verifyMail} = require('../controllers/userController')

router.post('/signUp', signUp)
router.get('/verify/:code', verifyMail)

module.exports = router;