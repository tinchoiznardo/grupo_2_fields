var express = require('express');
var router = express.Router();
var cargaController = require('../controllers/cargaController');


/* GET home page. */
router.get('/', cargaController);

module.exports = router;