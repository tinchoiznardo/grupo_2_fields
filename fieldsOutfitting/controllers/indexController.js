let fs = require('fs');
let path = require('path');

let productsFilePath = path.join(__dirname, './data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// let db = require('../database/models');

const indexController = function(req, res, next) {
    let highlightedProducts = products.filter(product => product.category == "highlighted");
    res.render('index', { 
      highlightedProducts: highlightedProducts,
      user: req.session.user
     });
  }

module.exports = indexController;