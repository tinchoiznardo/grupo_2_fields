const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../controllers/data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

module.exports = function authMiddleware (req, res, next) {
    if (req.session.user){
        next();
    } else if (req.cookies.user){
        const user = users.find((user) => {
            return user.id == req.cookies.user;
        });
        req.session.user = user;
        next();
    } else {
        return res.redirect('/user/log-in');
    };
};
