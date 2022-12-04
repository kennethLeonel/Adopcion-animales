module.exports = (sequelize, dataTypes) => {
    let alias = 'Users';
    let datos = {
        user_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(30),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        password: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        image: {
            type: dataTypes.STRING(250),
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
        role: {
            type: dataTypes.STRING(30),
            allowNull: false,
        },   
    }
    let config = {
        tableName: 'users',
        timestamps: false,
    }


    const User = sequelize.define(alias, datos, config);

    User.associate = (models) => {
        User.belongsTo(models.Cities, {
            as: 'city',
            foreignKey : 'city_id'
        });
        User.belongsTo(models.Countries, {
            as: 'country',
            foreignKey : 'country_id'
        });
        User.hasMany(models.Orders, {
            as: 'orders',
            foreignKey: 'user_id'
        });
    }

    return User
}