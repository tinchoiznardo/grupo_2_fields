module.exports = function(sequelize, dataTypes) {
    let alias = 'Product';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: dataTypes.INTEGER
        },
        stock: {
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        size_id: {
            type: dataTypes.INTEGER
        },
        color_id: {
            type: dataTypes.INTEGER
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        description: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        highlighted: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'products',
        timestamps: false
    }
    
    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Size, {
            as: 'sizes',
            foreignKey: 'size_id'
            });

        Product.belongsTo(models.Color, {
            as: 'colors',
            foreignKey: 'color_id'
            });

        Product.belongsTo(models.ProductCategory, {
            as: 'productCategories',
            foreignKey: 'category_id'
            });

        Product.hasMany(models.ProductCart, {
            as: 'productCart',
            foreignKey: 'product_id'
            });

        Product.belongsToMany(models.Cart, {
            as: 'carts',
            through: 'product_cart',
            foreignKey: 'product_id',
            otherKey: 'cart_id',
            timestapms: false
        });
    };

    return Product
};