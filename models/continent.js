const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Continent extends Model {}

Continent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'continent'
  }
);

module.exports = Continent;