var express = require('express');
var router = express.Router();
var { check, validationResult, body } = require('express-validator');
var usersController = require('../controllers/usersController');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var authMiddleware = require('../middlewares/authMiddleware');
var userExistenceMiddleware = require('../middlewares/userExistenceMiddleware');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/users')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })

/* GET home page. */
router.get('/log-in/', userExistenceMiddleware, usersController.logIn);
router.post('/log-in/', usersController.validate);

router.get('/sign-in/', usersController.signIn);
router.post('/sign-in/', upload.any(), [
    check('email').isEmail().withMessage('Invalid email'),
    check('name').isLength({
        min: 3,
        max: 50
    }).withMessage('Invalid name'),
    check('lastname').isLength({
        min: 3,
        max: 50
    }).withMessage('Invalid lastname'),
    check('password').isLength({
        min: 3,
        max: 50
    }).withMessage('Invalid password'),
    body('password').custom((value, { req }) => {
        return value === req.body.re_password;
    }).withMessage('Passwords doesn´t match')
], usersController.store);

router.get('/profile/', authMiddleware, usersController.profile);

router.post('/log-out/', usersController.logOut);

module.exports = router;

