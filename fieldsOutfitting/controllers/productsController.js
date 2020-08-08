let fs = require('fs');
let path = require('path');

// let productsFilePath = path.join(__dirname, './data/products.json');
// let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let db = require('../database/models');


const productsController = {
	// Root - Show all products
	root: async (req, res) => {
		let products = await db.Product.findAll();

		res.render('products', {
			products: products,
			user: req.session.user
		});
	},

	// Detail - Detail from one product
	detail: async (req, res) => {
		let product = await db.Product.findByPk(req.params.id, {
            include: [{association: 'productCategories'}, {association: 'productSize'}]
		});
		let availableSizes = await db.ProductSize.findAll({where: {product_id: req.params.id}});
		console.log(availableSizes[0].size_id)
		let sizes = await db.Size.findAll();
		// let size = await db.Size.findOne({where: {id: product.size_id}});
		
		res.render('productDetail',{
			product: product, 
			sizes: sizes, 
			availableSizes: availableSizes,
			user: req.session.user,
		});
	},

	// Create - Form to create
	create: async (req, res) => {
		let sizes = await db.Size.findAll();
		let categories = await db.ProductCategory.findAll();

		res.render('productLoad',{
			user: req.session.user,
			categories: categories,
			sizes: sizes
		});
	},
	
	// Create -  Method to store
	store: async (req, res, next) => {
		let Pimage = req.files[0].filename
		
		db.Product.create({
			name: req.body.name,
			price: req.body.price,
			image: "/images/products/" + Pimage,
			description: req.body.description,
			category_id: req.body.category,
			highlighted: req.body.highlighted,
		});

		let products = await db.Product.findAll();
		let product_id = len(products)

		db.ProductSize.create({
			size_id: req.body.size,
			product_id: product_id,
			stock: req.body.quantity
		})

		res.redirect('/');
	},

	// Update - Form to edit
	edit: async (req, res) => {
		let sizes = await db.Size.findAll();
		let colors = await db.Color.findAll();
		let categories = await db.ProductCategory.findAll();

		let productToEdit = await db.Product.findByPk(req.params.id)

		res.render('productEdit',{
			productToEdit: productToEdit,
			user: req.session.user,
			categories: categories
		});
	},

	// Update - Method to update
	update: (req, res) => {
		db.Product.update({
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			category: req.body.category,
			highlighted: req.body.highlighted,
        }, { where: {
            id: req.params.id
		}});
		
		res.redirect('/');		
	},

	// Delete - Delete one product from DB
	delete : (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/');
	},

	// searching
	search: async function(req, res) {
        const searchedProducts = await db.Product.findAll({
            where: {
              name: {
                [db.Sequelize.Op.like]: '%' + req.body.search + '%'
              }
            }
         });

         res.render('products', {
			user: req.session.user,
            products: searchedProducts
        });
	}
};

module.exports = productsController;