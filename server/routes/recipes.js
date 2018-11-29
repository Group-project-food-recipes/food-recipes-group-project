var express = require('express');
var router = express.Router();
const recipeController = require("../controllers/recipes")

/* GET home page. */
router.get('/', recipeController.search);

module.exports = router;