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
    name: 'Australia',
  },
];

const seedRegion = () => Continent.bulkCreate(regionData);

module.exports = seedRegion;
