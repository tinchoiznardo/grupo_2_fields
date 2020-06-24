module.exports = function(sequelize, dataTypes) {
    let alias = 'Cart';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'carts',
        timestamps: false
    }
    
    let Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models) {
        Cart.hasOne(models.User, {
            as: 'users',
            foreignKey: 'cart_id'
        });

        Cart.hasMany(models.ProductCart, {
            as: 'product_cart',
            foreignKey: 'cart_id'
        });

        Cart.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_cart',
            foreignKey: 'cart_id',
            otherKey: 'product_id',
            timestapms: false
        });
    };

    return Cart
};