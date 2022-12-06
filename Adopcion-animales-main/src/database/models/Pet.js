module.exports = (sequelize, dataTypes) => {

    let alias = 'Pets';
    let datos = {
        pet_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(30),
            allowNull: false,
        },
        age: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        sex: {
            type: dataTypes.STRING(30),
            allowNull: false,
        },
        breed_id :{
            type: dataTypes.INTEGER,
            allowNull: false,
            reference : {
                model: 'Razas',
                key: 'breed_id'
            },  
        },
        status: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
        },
        number_of_vaccines:{
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        city_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            reference : {
                model: 'Cities',
                key: 'city_id'
            }
        },
        country_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            reference : {
                model: 'Countries',
                key: 'country_id'
            }
        },
        description: {
            type: dataTypes.STRING(230),
            allowNull: false,
        },
        image: {
            type: dataTypes.STRING(230),
            allowNull: false,
        },
        attitude: {
            type: dataTypes.STRING(30),
            allowNull: false,
        }
    }
    let config = {
        tableName: 'pets',
        timestamps: false,
    }

    const Pet = sequelize.define(alias, datos, config)
    Pet.associate = (models) => {
        Pet.belongsTo(models.Countries, {
            as: 'country',
            foreignKey : 'country_id'
        });
        Pet.belongsTo(models.Cities, {
            as: 'city',
            foreignKey : 'city_id'
        });
        Pet.belongsTo(models.Razas, {
            as: 'breed',
            foreignKey : 'breed_id'
        });
        Pet.hasMany(models.Orders, {
            as: 'orders',
            foreignKey : 'pet_id'
        });
    }
    return Pet

}