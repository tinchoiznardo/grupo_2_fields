let db = require('../database/models');

const cartController = {
  show: (req, res) => {
    // const cartProducts = await db.Cart.findAll({
    //   where: {
    //     cart_id: 
    //   }
    res.render('cart', { 
      user: req.session.user,
      // cartProducts: cartProducts
    });
  },
  save: async (req, res) => {
    const user = req.session.user 
    await db.ProductCart.create({
      product_id: req.body.product_id,
      cart_id: user.cart_id,
      quantity: req.body.quantity,
  });
  },
  // delete: async (req, res) => {
  //   const deletedItem = await db.ProductCart.delete({
  //     product_id: req.body.product_id,
  //     cart_id: user.cart_id,
  // })
  }

module.exports = cartController