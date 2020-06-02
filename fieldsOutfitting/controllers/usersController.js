const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, './data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    logIn: (req, res) => {
        res.render('logIn', {
            error: undefined
        });
    },
    store: (req, res, next) => {
        const newUser = {
            id: users[users.length - 1].id + 1,
            name: req.body.name,
            lastname: req.body.lastname,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email,
            //avatar: req.files[0].filename
        };

        console.log(newUser);

        const userToSave = [...users, newUser];
        fs.writeFileSync(usersFilePath, JSON.stringify(userToSave, null, ' '));
        res.redirect('/');
    },
    signIn: (req, res) => {
        res.render('signIn');
    },
    validate: (req, res) => {
        // Validar la contraseña utilizando bcrypt.compareSync()
             // mostrar la view de login con un error.
        // Redireccionar a la home
        const email = req.body.email;
        const password = req.body.password;

        const user = users.find((user) => {
            return user.email == email;
        });

        if (!user) {
            res.render('logIn', {
                error: 'Usuario no encontrado!'
            });
        }  
        if(!bcrypt.compareSync(password, user.password)) {
            res.render('logIn', {
                error: 'Password incorrecto!'
            });
        }

        res.redirect('/')
    }
};

module.exports = usersController;