module.exports = function(sequelize, dataTypes) {
    let alias = 'UserCategory';

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
        tableName: 'user_categories',
        timestamps: false
    }
    
    let UserCategory = sequelize.define(alias, cols, config);

    UserCategory.associate = function(models) {
        UserCategory.hasMany(models.User, {
            as: 'users',
            foreignKey: 'category_id'
        });
    };

    return UserCategory
};