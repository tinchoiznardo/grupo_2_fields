var express = require('express');
var router = express.Router();
var cartController = require('../controllers/cartController');

/* GET home page. */
router.get('/', cartController.show);
router.post('/', cartController.save);


module.exports = router;
