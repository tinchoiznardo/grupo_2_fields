var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
var multer = require('multer');
var path = require('path');
var authMiddleware = require('../middlewares/authMiddleware');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', productsController.root);

/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/load/', authMiddleware, productsController.create); /* GET - Form to create */
router.post('/load/', upload.any(), productsController.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', authMiddleware, productsController.edit); /* GET - Form to create */
router.put('/edit/:id', productsController.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', authMiddleware, productsController.delete); /* DELETE - Delete from DB */

module.exports = router;
