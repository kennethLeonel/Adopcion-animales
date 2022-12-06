module.exports = (sequilize, dataTypes) => {

    let alias = 'Razas';
    let datos = {
        breed_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        pet_type_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            reference : { 
                model: 'TiposMascota',
                key: 'pet_type_id'
            }
        }

    }
    let config = {
        tableName: 'breeds',
        timestamps: false,
    }
    const Breeds = sequilize.define(alias, datos, config);
    
    Breeds.associate = (models) => {
        Breeds.belongsTo(models.TiposMascota, {
            as: 'pet_type',
            foreignKey : 'pet_type_id'
        });
        Breeds.hasMany(models.Pets, {
            as: 'pets',
            foreignKey: 'breed_id'
        });
    }

    return Breeds
}