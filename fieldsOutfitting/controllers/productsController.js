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
            include: [{association: 'sizes'}, {association: 'colors'}, {association: 'productCategories'}]
		});
		
		res.render('productDetail',{
			product: product, 
			user: req.session.user
		});
	},

	// Create - Form to create
	create: async (req, res) => {
		let sizes = await db.Size.findAll();
		let colors = await db.Color.findAll();
		let categories = await db.ProductCategory.findAll();

		res.render('productLoad',{
			user: req.session.user,
			sizes: sizes,
			color: colors,
			categories: categories
		});
	},
	
	// Create -  Method to store
	store: (req, res, next) => {
		let image = req.files[0].filename

		db.Product.create({
			name: req.body.name,
			price: req.body.price,
			image: "/images/products/" + image,
			description: req.body.description,
			category: req.body.category,
			size: req.body.size,
			color: req.body.color,
			highlighted: req.body.highlighted,
		});

		res.redirect('/');
	},

	// Update - Form to edit
	edit: async (req, res) => {
		let sizes = await db.Size.findAll();
		let colors = await db.Color.findAll();
		let categories = await db.ProductCategory.findAll();

		res.render('productEdit',{
			productToEdit: productToEdit,
			user: req.session.user,
			sizes: sizes,
			color: colors,
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
			size: req.body.size,
			color: req.body.color,
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