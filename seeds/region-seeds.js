const { Region } = require('../models');

const regionData = [
  {
    name: 'South America',
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
