const router = require('express').Router();
const { Region, Product } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all regions for homepage
router.get('/', async (req, res) => {
  try {
    // call sequelize to find all regions
    const dbRegionData = await Region.findAll({
    // include the region model and only region name  
      include: [
        {
          model: Region,
          attributes: ['name'
        ],
        },
      ],
    });
    // map out the selected data, without metadata
    const regions = dbRegionData.map((region) =>
    region.get({ plain: true })
    );
    // render homepage handlebar based on regions mapping if logged in
    res.render('homepage', {
        regions,
      loggedIn: req.session.loggedIn,
    });
    // if err, throw err
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one region
// Use the custom middleware before allowing the user to access the region
router.get('/region/:id', withAuth, async (req, res) => {
  try {
    // call sequelize to find region by pk
    const dbRegionData = await Region.findByPk(req.params.id, {
      // include the region's name
      include: [
        {
          model: Region,
          attributes: [
            'name',
          ],
        },
      ],
    });
    // map out the selected data, without metadata
    const region = dbRegionData.get({ plain: true });
    // render region based on id if logged in
    res.render('region', { region, loggedIn: req.session.loggedIn });
  } catch (err) {
    // if err, throw err
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one product
// Use the custom middleware before allowing the user to access the painting
router.get('/product/:id', withAuth, async (req, res) => {
  try {
    // call sequelize to find product by pk
    const dbProductData = await Product.findByPk(req.params.id, {
        include: [
            {
                model: Product,
                attributes: [
                    'name',
                    'price',
                    'description',
                    'origin_country',
                ]
            }
        ]
    });
    // render product without metadata if user is logged in
    const product = dbProductData.get({ plain: true });
    res.render('product', { product, loggedIn: req.session.loggedIn });
    // if err, throw err
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET login page
router.get('/login', (req, res) => {
    // if logged in, redirect to homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // if log in doesn't match, bring to log in page
  res.render('login');
});

module.exports = router;
