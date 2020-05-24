const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, './data/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));


const indexController = function(req, res, next) {
    let productosDestacados = productos.filter(producto => producto.categoria == "destacado");
    res.render('index', { productosDestacados: productosDestacados });
  }

module.exports = indexController;