var express = require('express');
var router = express.Router();
var cartController = require('../controllers/cartController');

/* GET home page. */
router.get('/', cartController);

module.exports = router;
