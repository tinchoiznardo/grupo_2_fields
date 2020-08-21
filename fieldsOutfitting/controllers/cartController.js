let db = require('../database/models');

const cartController = {
  show: async (req, res) => {
    const user = req.session.user 
    const productCart = await db.ProductCart.findAll({ where: {
      cart_id: user.cart_id 
    }});
    const products = await db.Product.findAll()
    let productsInCart = [];

    // for (purchase of productCart){
    //   console.log(products.filter(el => el.id == purchase.product_id))
    //   productsInCart.push(products.filter(el => el.id == purchase.product_id))
    // }


    
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
      size_id: req.body.size_id
    }
    await db.ProductCart.create(purchase);
    
    const productCart = await db.ProductCart.findAll({ where: {
      product_id: req.body.product_id
    }});

    await db.ProductSize.update({
			stock: productCart.stock - 1,
      }, { where: {
        product_id: req.body.product_id
		}});
    // localStorage.setItem('purchase', purchase)

    res.redirect("/")
    },
    delete : (req, res) => {
      const user = req.session.user 

      db.ProductCart.destroy({ where: {
        cart_id: user.cart_id,
        product_id: req.params.id
      }});

  

      res.redirect('/');
  },
  }

module.exports = cartController