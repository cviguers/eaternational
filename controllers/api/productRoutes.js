// /api/products/...
const router = require('express').Router();
// import product model
const { Product } = require('../../models');
// require authorization to view snacks
const withAuth = require('../../utils/auth');
 
// create new product on table
router.post('/', withAuth, async (req, res) => {
  try {
    // call sequelize to create new product and hold variable
    const newProduct = await Product.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    // respond with  new region in json format   
    res.status(200).json(newProduct);
    // if err throw err
  } catch (err) {
    res.status(400).json(err);
  }
});

// read entire product table
router.get('/', async (req, res) => {
  try {
    // call sequelize to find all products and store variables
    const productData = await Product.findAll();
    // return data in json
    res.status(200).json(productData);
    // if err throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// read product table by id
router.get('/:id', async (req, res) => {
  try {
    // call sequelize to find product by primary key id and store variable
    const productData = await Product.findByPk(req.params.id);
    // return data in json
    res.status(200).json(productData);
    // if err throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// update product in product table
router.put('/:id', async (req, res) => {
  try {
    // call sequelize to update based upon what is in the product body
    const productData = await Product.update(
      {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        origin_country: req.body.pages,
        description: req.body.edition,
      },
      // update based on product id in the params
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // return created product in json
    res.status(200).json(productData);
    // if err throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// delete product based on id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    // call sequelize to delete based on the params id
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    // return confirmation that row was deleted
    res.status(200).json(productData);
    // if err throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;
