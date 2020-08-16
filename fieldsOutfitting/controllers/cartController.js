let db = require('../database/models');

const cartController = {
  show: (req, res) => {
    res.render('cart', { 
      user: req.session.user 
    });
  },
  save: async (req, res) => {
    const user = req.session.user 
    await db.ProductCart.create({
      product_id: req.body.product_id,
      cart_id: user.cart_id,
      quantity: req.body.quantity,
  });

  },}

module.exports = cartController