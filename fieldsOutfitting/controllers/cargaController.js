const cargaController = function(req, res, next) {
    res.render('cargaProducto', { title: 'Express' });
  }
  
module.exports = cargaController;