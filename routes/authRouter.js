var express = require('express');
var router = express.Router();

const {signUp} = require('../controllers/userController')

router.post('/signUp', signUp)

module.exports = router;