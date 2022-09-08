var express = require('express');
var router = express.Router();

const {createComment, readAll} = require('../controllers/commentController')

router.get('/query', readAll)
router.post('/', createComment)


module.exports = router;