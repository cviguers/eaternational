// const User = require('./User');
const Region = require('./Region');
const Product = require('./Product');

Region.hasMany(Product, {
  foreignKey: 'region_id',
});

Product.belongsTo(Region, {
  foreignKey: 'region_id',
});

module.exports = {Region, Product };