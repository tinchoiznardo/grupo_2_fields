var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');

/* GET home page. */
router.get('/log-in/', usersController.logIn);
router.post('/log-in/', usersController.validate);
router.get('/sign-in/', usersController.signIn);
router.post('/sign-in/', usersController.store);


module.exports = router;
