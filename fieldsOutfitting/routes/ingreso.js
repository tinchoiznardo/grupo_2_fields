var express = require('express');
var router = express.Router();
var ingresoController = require('../controllers/ingresoController')

/* GET home page. */
router.get('/', ingresoController);

module.exports = router;
