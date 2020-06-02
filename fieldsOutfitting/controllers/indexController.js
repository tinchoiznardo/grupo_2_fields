const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, './data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const indexController = function(req, res, next) {
    let highlightedProducts = products.filter(product => product.category == "highlighted");
    res.render('index', { highlightedProducts: highlightedProducts });
  }

module.exports = indexController;