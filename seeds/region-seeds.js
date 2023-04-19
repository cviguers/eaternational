const { Region } = require('../models');

const regionData = [
  // region_id 1
  {
    name: 'Latin America',
  },
  // region_id 2
  {
    name: 'Asia',
  },
  // region_id 3
  {
    name: 'Africa',
  },
  // region_id 4
  {
    name: 'Europe',
  },
  // region_id 5
  {
    name: 'Middle East',
  }
];

const seedRegion = () => Region.bulkCreate(regionData);

module.exports = seedRegion;
