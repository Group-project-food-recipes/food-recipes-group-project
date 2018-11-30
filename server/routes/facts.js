var express = require('express');
var router = express.Router();
var fact = require('../controllers/fact')

router.get('/', fact.show);

module.exports = router;