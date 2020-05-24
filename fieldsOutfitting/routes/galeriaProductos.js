var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/productos')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', productsController.root);
router.get('/detalle/:id', productsController.detail);

/*** CREATE ONE PRODUCT ***/ 
router.get('/carga/', productsController.create); /* GET - Form to create */
router.post('/carga/', upload.any(), productsController.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/editar/:id', productsController.edit); /* GET - Form to create */
router.put('/editar/:id', productsController.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.delete); /* DELETE - Delete from DB */

module.exports = router;
