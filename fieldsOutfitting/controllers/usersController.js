let fs = require('fs');
let path = require('path');
let bcrypt = require('bcrypt');
let { check, validationResult, body } = require('express-validator'); //es necesario?

// let usersFilePath = path.join(__dirname, './data/users.json');
// let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

let db = require('../database/models');

const usersController = {
    logIn: (req, res) => {
        res.render('logIn', {
            error: undefined,
            user: req.session.user
        });
    },
    validate: async (req, res) => {
        let user = await db.User.findOne({
            where: {
                mail: req.body.mail
            }
        });


        let userValidator = user != undefined;
        let passwordValidator = user? bcrypt.compareSync(req.body.password, user.password): undefined;
        
        if (!userValidator) {
            res.render('logIn', {
                error: 'User not found!',
                user: req.session.user
            });
        }  

        if(!passwordValidator) {
            res.render('logIn', {
                error: 'Wrong password!',
                user: req.session.user
            });
        }

        
        req.session.user = user;

        if(req.body.remember){
            res.cookie('user', user.id, {
                maxAge: 10000
            });
        };

        res.redirect('/user/profile')
    },
    store: async (req, res, next) => {
        const errors = validationResult(req);

        let user = await db.User.findOne({
            where: {
                mail: req.body.mail
            }
        });


        if (user != '') {
            errors.errors.push({msg: "An user with that email already exists"});
        }

        if (!errors.isEmpty()) {
            return res.render('signIn', {
                errors: errors.errors,
                user: req.session.user
            });
        };

        await db.User.create({
            first_name: req.body.name,
            last_name: req.body.lastname,
            password: bcrypt.hashSync(req.body.password, 10),
            mail: req.body.mail,
            adress: req.body.adress,
            phone: req.body.phone,
            avatar: "/images/users/" + req.files[0].filename,
            category_id: 2,
            cart_id: 1
        });

        res.redirect('/user/log-in');
        //next()
    },
    signIn: (req, res) => {
        res.render('signIn', {
            errors: undefined,
            user: req.session.user
        });
    },
    profile: (req, res) => {    
    res.render('profile', {
        user: req.session.user
    });    
    },
    logOut: (req, res) => {
        req.session.user = null;
        res.cookie('user', null, { maxAge: -1});
        res.redirect('/user/log-in')
    }
};

module.exports = usersController;