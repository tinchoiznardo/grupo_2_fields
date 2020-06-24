let fs = require('fs');
let path = require('path');

let productsFilePath = path.join(__dirname, './data/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
            include: [{association: 'sizes'}, {association: 'colors'}, {association: 'product_categories'}]
		});
		
		res.render('productDetail',{
			product: product, 
			user: req.session.user
		});
	},

	// Create - Form to create
	create: async (req, res) => {
		// let sizes = await db.Size.findAll();
		// let colors = await db.Color.findAll();
		// let categories = await db.ProductCategory.findAll();

		res.render('productLoad',{
			user: req.session.user,
			// sizes: sizes,
			// color: colors,
			// categories: categories
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
			type: req.body.type,
		});

		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = req.params.id;
		const productToEdit = products.find(p => p.id == id);
		res.render('productEdit',{
			productToEdit: productToEdit,
			user: req.session.user
		});
	},

	// Update - Method to update
	update: (req, res) => {
		const id = req.params.id;
		const productToEdit = products.find(p => p.id == id);
		console.log(productToEdit)
		products[id - 1] =({
			...productToEdit,
			name: req.body.name,
			description: req.body.description,
			discount: req.body.discount,
			category: req.body.category,
			highlighted: req.body.highlighted,
			price: req.body.price
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		
		res.redirect('/');
		
	},

	// Delete - Delete one product from DB
	delete : (req, res) => {
		const id = req.params.id;
		const productsWithout = products.filter( product => id != product.id);
		fs.writeFileSync(productsFilePath, JSON.stringify(productsWithout, null, ' '));
		res.redirect('/');

	}
}

module.exports = productsController;