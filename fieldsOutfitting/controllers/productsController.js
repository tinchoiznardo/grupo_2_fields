const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, './data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    // Root - Show all products
	root: (req, res) => {
		res.render('products', {
			products: products,
		});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const id = req.params.id;
		const product = products.find(p => p.id == id);
		res.render('productDetail',{
			product: product,
		});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('productLoad');
	},
	
	// Create -  Method to store
	store: (req, res, next) => {
		const newId = products[products.length - 1].id + 1;

		const image = req.files[0].filename

		const newProduct = {
			id : newId,
			name: req.body.name,
			type: req.body.type,
			price: req.body.price,
			discount: req.body.discount,
			image: "/images/products/" + image,
			description: req.body.description,
			category: req.body.category

		};

		console.log(req.body)
		const finalproducts = [...products, newProduct];
		fs.writeFileSync(productsFilePath, JSON.stringify(finalproducts, null, ' '));
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = req.params.id;
		const productToEdit = products.find(p => p.id == id);
		res.render('productEdit',{
			productToEdit: productToEdit
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
			type: req.body.type,
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