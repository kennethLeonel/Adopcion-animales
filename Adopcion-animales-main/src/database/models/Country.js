module.exports = (sequelize, DataTypes) => {

    let modelo = {
        country_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
        }
    }
    let config = {

        tableName: 'countries',
        timestamps: false
    }

    const Country = sequelize.define('Countries', modelo, config);
    
    Country.associate = (models) => {
        Country.hasMany(models.Cities, {
            as: 'cities',
            foreignKey: 'country_id'
        });
        Country.hasMany(models.Users, {
            as: 'users',
            foreignKey: 'country_id'
        });
        Country.hasMany(models.Pets, {
            as: 'pets',
            foreignKey: 'country_id'
        });

    }

    return Country
}