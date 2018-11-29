var express = require('express');
var router = express.Router();
var map = require('../controllers/map')

router.get('/', map.show);

module.exports = router;
