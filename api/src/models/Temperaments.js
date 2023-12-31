const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('temperaments', {
    // id:{type: DataTypes.INTEGER, primaryKey: true, allowNull: false},
    id:{type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey:true},
    name: { type: DataTypes.STRING, allowNull: false},
  },
  {
    timestamps: false
  }
  );
};