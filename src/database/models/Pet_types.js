module.exports = (sequilize, dataTypes)  => {
    let alias = 'TiposMascota';
    let datos = {
        pet_type_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
    }
    let config = {
        tableName: 'pet_types',
        timestamps: false,
    }
    const Pet_types = sequilize.define(alias, datos, config);
    Pet_types.associate = (models) => {
        Pet_types.hasMany(models.Razas, {
            as: 'breeds',
            foreignKey: 'pet_type_id'
        });
    }
    return Pet_types
}
