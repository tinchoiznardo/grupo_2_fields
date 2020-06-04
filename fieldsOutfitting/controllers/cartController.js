const cartController = function(req, res, next) {
    res.render('cart', { title: 'Express' });
  }

module.exports = cartController