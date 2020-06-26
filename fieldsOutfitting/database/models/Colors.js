module.exports = function(sequelize, dataTypes) {
    let alias = 'Color';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'colors',
        timestamps: false
    };
    
    let Color = sequelize.define(alias, cols, config);

    Color.associate = function(models) {
        Color.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'color_id'
        });
    };

    return Color
};