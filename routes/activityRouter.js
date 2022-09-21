var express = require('express');
var router = express.Router();

const {createActivity, readAll, updateActivity} = require('../controllers/activityController')

router.get('/query', readAll)
router.post('/', createActivity)
router.patch('/update-activity/:id', updateActivity)

module.exports = router;