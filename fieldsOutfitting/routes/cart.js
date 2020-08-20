var express = require('express');
var router = express.Router();
var cartController = require('../controllers/cartController');
var authMiddleware = require('../middlewares/authMiddleware');

/* GET home page. */
router.get('/', authMiddleware, cartController.show);
router.post('/save', authMiddleware, cartController.save);
router.delete('/delete/:product_id', authMiddleware, cartController.delete);

module.exports = router;
