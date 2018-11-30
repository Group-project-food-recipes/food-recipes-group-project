var express = require('express');
var router = express.Router();
const youtubeController = require("../controllers/youtube")

/* GET home page. */
router.get('/:q', youtubeController.list);
router.post('/', youtubeController.search);

module.exports = router;