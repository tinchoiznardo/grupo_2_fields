module.exports = function(sequelize, dataTypes) {
    let alias = 'ProductCart';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER,
        },
        cart_id: {
            type: dataTypes.INTEGER,
        },
        quantity: {
            type: dataTypes.INTEGER,
        }
    };

    let config = {
        tableName: 'product_cart',
        timestamps: false
    }
    
    let ProductCart = sequelize.define(alias, cols, config);

    ProductCart.associate = function(models) {
        ProductCart.belongsTo(models.Product, {
            as: 'productCart',
            foreignKey: 'product_id'
        });

        ProductCart.belongsTo(models.Cart, {
            as: 'cartProduct',
            foreignKey: 'cart_id'
        });
    };

    return ProductCart
};