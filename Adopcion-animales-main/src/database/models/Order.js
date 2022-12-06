module.exports = (sequelize, dataTypes) => {
    let alias = 'Orders';
    let datos = {
        order_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            reference : {
                model: 'Users',
                key: 'user_id'
            }
        },
        pet_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            reference : {
                model: 'Pets',
                key: 'pet_id'
            }
        },
        date_of_order: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        
    }
    let config = {
        tableName: 'orders',
        timestamps : false,
    }
    const Order = sequelize.define(alias, datos, config);

    Order.associate = (models) => {
        Order.belongsTo(models.Users, {
            as: 'user',
            foreignKey : 'user_id'
        });
        Order.belongsTo(models.Pets, {
            as: 'pet',
            foreignKey : 'pet_id'
        });
    };
    return Order

}