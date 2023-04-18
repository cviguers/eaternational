// /api/products/...
const router = require('express').Router();
// import product model
const { Region } = require('../../models');

// require authorization to view snacks
const withAuth = require('../../utils/auth');
 
// create new region on table
router.post('/', withAuth, async (req, res) => {
    try {
      // call sequelize to create new region and hold variable
      const newRegion = await Region.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      // respond with  new region in json format   
      res.status(200).json(newRegion);
      // if err throw err
    } catch (err) {
      res.status(400).json(err);
    }
});

// read entire region table
router.get('/', withAuth, async (req, res) => {
  try {
    // call sequelize to find all regions and store variables
    const regionData = await Region.findAll();
    // return data in json
    res.status(200).json(newRegion);
    // if err throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// read region table by id
router.get('/:id', withAuth, async (req, res) => {
  try {
    // call sequelize to find region by primary key id and store variable
    const regionData = await Region.findByPk(req.params.id);
    // return data in json
    res.status(200).json(newRegion);
    // if err throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update new region in region table
router.put('/:id', withAuth, async (req, res) => {
  try {
    // call sequelize to update based upon what is in the region body
    const regionData = await Region.update(
      {
        name: req.body.name,
      },
      // update based on region id in the params
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // return created product in json
    res.status(200).json(newRegion);
    // if err throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete region based on id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    // call sequelize to delete based on the params id
    const regionData = await Region.destroy({
      where: {
        id: req.params.id,
      },
    });
    // return confirmation that row was deleted
    res.status(200).json(newRegion);
    // if err throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
