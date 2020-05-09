var express = require('express');
var router = express.Router();
var carritoController = require('../controllers/carritoController');

/* GET home page. */
router.get('/', carritoController);

module.exports = router;
