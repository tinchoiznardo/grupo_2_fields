const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
var { check, validationResult, body } = require('express-validator'); //es necesario?

const usersFilePath = path.join(__dirname, './data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const usersController = {
    logIn: (req, res) => {
        res.render('logIn', {
            error: undefined
        });
    },
    validate: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        const user = users.find((user) => {
            return user.email == email;
        });

        const userValidator = user != undefined;
        const passwordValidator = user? bcrypt.compareSync(password, user.password): undefined;
        
        if (!userValidator) {
            res.render('logIn', {
                error: 'User not found!'
            });
        }  

        if(!passwordValidator) {
            res.render('logIn', {
                error: 'Wrong password!'
            });
        }

        
        req.session.user = user;

        if(req.body.remember){
            res.cookie('user', user.id, {
                maxAge: 100000000
            });
        };

        res.redirect('/user/profile')
    },
    store: (req, res, next) => {
        const errors = validationResult(req);

        const userExistenceValidator = users.find((user) => {
            return user.email == req.body.email;
        });

        if (userExistenceValidator){
            errors.errors.push({
                msg: "Email already registered"
            })
        }

        if (!errors.isEmpty()) {
            return res.render('signIn', {
                errors: errors.errors
            });
        }

        const newUser = {
            id: users[users.length - 1].id + 1,
            name: req.body.name,
            lastname: req.body.lastname,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email,
            avatar: "/images/users/" + req.files[0].filename
        };

        console.log(errors.errors);

        const userToSave = [...users, newUser];
        fs.writeFileSync(usersFilePath, JSON.stringify(userToSave, null, ' '));
        res.redirect('/');
        next()
    },
    signIn: (req, res) => {
        res.render('signIn', {
            errors: undefined
        });
    },
    profile: (req, res) => {     
    res.render('profile', {
        user: req.session.user
    });    
    }
};

module.exports = usersController;