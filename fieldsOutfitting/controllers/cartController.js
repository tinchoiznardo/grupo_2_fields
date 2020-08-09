let db = require('../database/models');

const cartController = {
  show: async (req, res) => {
    const user = req.session.user 
    const productCart = await ProductCart.findAll({ where: {
      cart_id: user.cart_id 
    }});
    const products = await Product.findAll();
    
    res.render('cart', { 
      user: req.session.user,
      products: products,
      productCart: productCart 
    });
  },
  save: async (req, res) => {
    const user = req.session.user 
    const purchase = {
      product_id: req.body.product_id,
      cart_id: user.cart_id,
      quantity: req.body.quantity,
      size: req.body.size_id
    }
    await db.ProductCart.create(purchase);
    const productCart = await ProductCart.findAll({ where: {
      product_id: req.body.product_id
    }});

    await db.ProductCart.update({
			stock: productCart.stock - 1,
      }, { where: {
        product_id: req.body.product_id
		}});
    localStorage.setItem('purchase', purchase)
    },}

module.exports = cartController