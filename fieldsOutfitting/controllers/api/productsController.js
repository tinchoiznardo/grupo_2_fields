let fs = require('fs');
let path = require('path');

// let productsFilePath = path.join(__dirname, './data/products.json');
// let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let db = require('../../database/models');


const productsController = {
	// List - Show all products
	list: async (req, res) => {
        let products = await db.Product.findAll({
            attributes: [
                "id",
                "name",
                "price",
                "image"
            ]
        });
        for (let i = 0 ; i < products.length ;i++) {
            await products[i].setDataValue ('endpoint', `/api/products/${products[i].id}`)
        } 

        
        let answer = {
            meta: {
                status:200,
                total: products.length,
                url: '/api/products', 
            },
            data: products
            }
        res.json(answer)
    },
}

module.exports = productsController;