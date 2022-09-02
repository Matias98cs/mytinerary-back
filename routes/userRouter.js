var express = require('express');
var router = express.Router();

const {createUser} = require('../controllers/userController')

router.post('/auth', createUser)