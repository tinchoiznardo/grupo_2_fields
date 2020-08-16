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
        name: {
            type: dataTypes.STRING
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

        Product.hasMany(models.ProductSize, {
            as: 'productSize',
            foreignKey: 'product_id'
            });

        Product.belongsToMany(models.Size, {
            as: 'sizes',
            through: 'product_size',
            foreignKey: 'product_id',
            otherKey: 'size_id',
            timestapms: false
        });
    };

    return Product
};