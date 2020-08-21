let fs = require('fs');
let path = require('path');

// let productsFilePath = path.join(__dirname, './data/products.json');
// let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

let db = require('../../database/models');


const usersController = {
	// List - Show all products
	list: async (req, res) => {
        let users = await db.User.findAll({
            attributes: [
                "id",
                "first_name",
                "last_name",
                "mail",
                "adress",
                "phone",
                "category_id"
            ]
        });
        for (let i = 0 ; i < users.length ;i++) {
            await users[i].setDataValue ('endpoint', `/api/users/${users[i].id}`)
        } 

        
        let answer = {
            meta: {
                status:200,
                total: users.length,
                url: '/api/users', 
            },
            data: users
            }
        res.json(answer)
    },
    edit: async (req, res) => {
		
        await db.User.update({
			category_id: req.body.category_id
        }, { where: {
            id: req.body.id
		}});
    },
}

module.exports = usersController;