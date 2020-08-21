let db = require('../database/models');

const cartController = {
  show: async (req, res) => {
    const user = req.session.user 
    const productCart = await db.ProductCart.findAll({ where: {
      cart_id: user.cart_id 
    }});
    const products = await db.Product.findAll()
    let total = 0;
    let subtotals = {}
    let subtotal

    for (purchase of productCart){
      total += (products.filter(el => el.id == purchase.product_id))[0].price * purchase.quantity;
      subtotal = (products.filter(el => el.id == purchase.product_id))[0].price * purchase.quantity;
      subtotals[purchase.product_id] = subtotal
    }

    console.log(subtotals)
    
    res.render('cart', { 
      user: req.session.user,
      products: products,
      productCart: productCart,
      total: total,
      subtotals: subtotals
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
    console.log(purchase, "ASDASDASD")
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

      console.log("ENTRE AL DELETE")

      res.redirect('/');
  },
  }

module.exports = cartController