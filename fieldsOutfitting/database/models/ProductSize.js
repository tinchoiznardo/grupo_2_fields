module.exports = function(sequelize, dataTypes) {
    let alias = 'ProductSize';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        size_id: {
            type: dataTypes.INTEGER,
        },
        product_id: {
            type: dataTypes.INTEGER,
        },
        stock: {
            type: dataTypes.INTEGER,
        }
    };

    let config = {
        tableName: 'product_size',
        timestamps: false
    }
    
    let ProductSize = sequelize.define(alias, cols, config);

    ProductSize.associate = function(models) {
        ProductSize.belongsTo(models.Product, {
            as: 'productSize',
            foreignKey: 'product_id'
        });

        ProductSize.belongsTo(models.Size, {
            as: 'sizeProduct',
            foreignKey: 'size_id'
        });
    };

    return ProductSize
};