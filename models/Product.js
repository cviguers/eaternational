// import parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import database connection from config.js
const sequelize = require('../config/connection');

// initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init( // defining columns
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      }
    },
    origin_country: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    // filename: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'region',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
