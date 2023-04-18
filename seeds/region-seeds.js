const { Region } = require('../models');

const regionData = [
  {
    name: 'Latin America',
  },
  {
    name: 'Asia',
  },
  {
    name: 'Africa',
  },
  {
    name: 'Europe',
  },
  {
    name: 'Middle East',
  }
];

const seedRegion = () => Continent.bulkCreate(regionData);

module.exports = seedRegion;
