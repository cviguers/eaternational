const router = require('express').Router();
const { log } = require('console');
const { Region, Product } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET response for homepage-dicks handlebars
router.get('/', async (req, res) => {
  try {
    // render homepage handlebar if logged in
    // call sequelize to find all regions
    const dbRegionData = await Region.findAll();
      // map out the selected data, without metadata
      const regions = dbRegionData.map((region) =>
      region.get({ plain: true })
      );
      console.log(dbRegionData)
    res.render('home', { 
      regions
    });
    // if err, throw err
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET response for checkout page
router.get('/regions', async (req, res) => {
  try {
    // render checkout page
    res.render('home', {
      logged_in: req.session.logged_in
    });
    // if err, throw err
  } catch (err) {
    res.status(400).json(err);
  }
});



// GET one region - - - i don't think we'll need this?
// Use the custom middleware before allowing the user to access the region
router.get('/region/:id', async (req, res) => {
  try {
    // call sequelize to find region by pk
    const dbProductData = await Product.findAll({where: {region_id: req.params.id}});

    // map out the selected data, without metadata
    const products = dbProductData.map((product) =>
    product.get({ plain: true }));
    // render region based on id if logged in
    const dbRegionData = await Region.findAll();
      // map out the selected data, without metadata
    const regions = dbRegionData.map((region) =>
    region.get({ plain: true })
    );
    res.render('products', { products, regions});
  } catch (err) {
    // if err, throw err
    console.log(err);
    res.status(500).json(err);
  }
});

// GET response all products from region
router.get('/products', async (req, res) => {
  try {
    // call sequelize to find all products
    const dbProductData = await Product.findAll({
    // include the region model from associated region_id
      include: [
        {
          model: Product,
          attributes: [
            'name',
            'price',
            'description',
            'origin_country',
          ]
        },
      ],
    });
    // map out the selected data, without metadata
    const products = dbProductData.map((product) =>
    product.get({ plain: true })
    );
    // render products handlebar based on products mapping if logged in
    res.render('products', {
        products,
      // loggedIn: req.session.loggedIn,
    });
    // if err, throw err
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET response for one product
// Use the custom middleware before allowing the user to access the product
router.get('/product/:id', async (req, res) => {
  try {
    // call sequelize to find product by pk
    const dbProductData = await Product.findByPk(req.params.id, {
    });
    // render product without metadata if user is logged in
    const product = dbProductData.get({ plain: true });
    console.log(product),
    res.render('product-single', { ...product });
    // if err, throw err
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// GET response for about page
router.get('/about', async (req, res) => {
  try {
    // render about.hbars
    res.render('about', {
    });
    // if err, throw err
  } catch (err) {
    res.status(400).json(err);
  }
});


// GET response for checkout page
router.get('/checkout', withAuth, async (req, res) => {
      // If the user is logged in, allow them to view the checkout page
      try {
        // render checkout page
        res.render('checkout', {
          logged_in: req.session.logged_in
        });
        // if err, throw err
      } catch (err) {
        res.status(400).json(err);
      }
});

// GET response login page
router.get('/login', (req, res) => {
    // if logged in, redirect to homepage
  if (req.session.loggedIn) {
    res.render('checkout');
    return;
  }
  // if log in doesn't match, bring to log in page
  res.render('login');
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.res('/')
    });
  } else {
    res.status(404).end();
  }
});

// GET response for about page
router.get('/thankyou', async (req, res) => {
  try {
    // render about.hbars
    res.render('thankyou', {
    });
    // if err, throw err
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
