const cartController = function(req, res, next) {
    res.render('cart', { 
      user: req.session.user 
    });
  }

module.exports = cartController