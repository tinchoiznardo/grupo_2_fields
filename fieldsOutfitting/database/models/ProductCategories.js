module.exports = function(sequelize, dataTypes) {
    let alias = 'ProductCategory';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
        },
        type: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'product_categories',
        timestamps: false
    }
    
    let ProductCategory = sequelize.define(alias, cols, config);

    ProductCategory.associate = function(models) {
        ProductCategory.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id'
        });
    };

    return ProductCategory
};