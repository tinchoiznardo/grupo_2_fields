module.exports = function(sequelize, dataTypes) {
    let alias = 'User';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING
        },
        last_name: {
            type: dataTypes.STRING
        },
        mail: {
            type: dataTypes.STRING
        },
        adress: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        avatar: {
            type: dataTypes.STRING
        },
        cart_id: {
            type: dataTypes.INTEGER,
        },
        phone: {
            type: dataTypes.INTEGER
        },
        category_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Cart, {
            as: 'carts',
            foreignKey: 'cart_id'
        });

        User.belongsTo(models.UserCategory, {
            as: 'userCategories',
            foreignKey: 'category_id'
            });
    };

    return User
};