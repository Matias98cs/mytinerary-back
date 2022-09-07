var express = require('express');
var router = express.Router();

const {createActivity, readAll} = require('../controllers/activityController')

router.get('/query', readAll)
router.post('/', createActivity)


module.exports = router;