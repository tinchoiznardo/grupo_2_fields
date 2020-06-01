var express = require('express');
var router = express.Router();
var registroController = require('../controllers/registroController')

/* GET home page. */
router.get('/', registroController.root);
router.post('/', registroController.store);


module.exports = router;
