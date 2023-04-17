const router = require('express').Router();
const regionRoutes = require('./regionRoutes');
const productRoutes = require('./productRoutes');

router.use('/region', regionRoutes);
router.use('/products', productRoutes);

module.exports = router;
