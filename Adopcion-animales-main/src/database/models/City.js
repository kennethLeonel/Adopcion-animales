module.exports = (sequelize, DataTypes) => {
    let alias = 'Cities';
    let datos = {
        city_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference : {
                model: 'Countries',
                key: 'country_id'
            }
        }
    }
    let config = {
        tableName: 'cities',
        timestamps: false,
    }
    const City = sequelize.define(alias, datos, config);

    City.associate = (models) => {
        City.belongsTo(models.Countries, {
            as: 'country',
            foreignKey : 'country_id'
        });
        City.hasMany(models.Users, {
            as: 'users',
            foreignKey: 'city_id'
        });
        City.hasMany(models.Pets, {
            as: 'pets',
            foreignKey: 'city_id'
        });
    };
    return City

}