const fs = require('fs');
const path = require('path');

const productosFilePath = path.join(__dirname, './data/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const productosController = {
    // Root - Show all productos
	root: (req, res) => {
		res.render('galeriaProductos', {
			productos: productos,
		});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const id = req.params.id;
		const producto = productos.find(p => p.id == id);
		res.render('detalleProducto',{
			producto: producto,
		});
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('cargaProducto');
	},
	
	// Create -  Method to store
	store: (req, res, next) => {
		const newId = productos[productos.length - 1].id + 1;

		const image = req.files[0].filename

		const newProduct = {
			id : newId,
			nombre: req.body.nombre,
			tipo: req.body.tipo,
			precio: req.body.precio,
			descuento: req.body.descuento,
			imagen: "/images/productos/" + image,
			descripcion: req.body.descripcion,
			categoria: req.body.categoria

		};

		console.log(req.body)
		const finalproductos = [...productos, newProduct];
		fs.writeFileSync(productosFilePath, JSON.stringify(finalproductos, null, ' '));
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = req.params.id;
		const productToEdit = productos.find(p => p.id == id);
		res.render('edicionProducto',{
			productToEdit: productToEdit
		});
	},
	// Update - Method to update
	update: (req, res) => {
		const id = req.params.id;
		const productToEdit = productos.find(p => p.id == id);
		console.log(productToEdit)
		productos[id - 1] =({
			...productToEdit,
			nombre: req.body.nombre,
			descripcion: req.body.descripcion,
			descuento: req.body.descuento,
			categoria: req.body.categoria,
			precio: req.body.precio
		});

		fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, ' '));
		
		res.redirect('/');
		
	},

	// Delete - Delete one product from DB
	delete : (req, res) => {
		const id = req.params.id;
		const productosWithout = productos.filter( product => id != product.id);
		fs.writeFileSync(productosFilePath, JSON.stringify(productosWithout, null, ' '));
		res.redirect('/');

	}
}

module.exports = productosController;