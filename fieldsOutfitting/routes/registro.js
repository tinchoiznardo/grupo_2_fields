var express = require('express');
var router = express.Router();
var registroController = require('../controllers/registroController')

/* GET home page. */
router.get('/', registroController);

module.exports = router;
