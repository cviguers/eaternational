const router = require('express').Router();
const regionRoutes = require('./regionRoutes');
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');

router.use('/regions', regionRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);

module.exports = router;
