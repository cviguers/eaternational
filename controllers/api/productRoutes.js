const router = require('express').Router();

// import product model
const { Product } = require('../../models');

// require authorization to view snacks
// const withAuth = require('../../utils/auth');

// /api/products/...

router.post('/', withAuth, async (req, res) => {
    try {
      const newProject = await Project.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newProject);
    } catch (err) {
      res.status(400).json(err);
    }
  });