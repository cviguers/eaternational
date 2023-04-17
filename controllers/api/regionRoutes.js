const router = require("express").Router();

// import region model
const { Region } = require("../../models");

// /api/region/...

// get all regions
router.get("/", async (req, res) => {
    try {
        // call sequelize to findAll in the region table
        const regionData = await Region.findAll();
        // return found data
        res.status(200).json(regionData);
    // if err throw err
    } catch (err) {
        res.status(400).json(err);
    }
});

// create new region
router.post("/", async (req, res) => {
    try {
        // call sequelize to create a column the region table based off of the req.body
        const regionData = await Region.create(req.body);
        // return new data
        return res.json(regionData);
    // if err throw err
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete region by id
router.delete('/:id', async (req, res) => {
    try {
        // call sequelize to destroy a column the region table based off of id
        const regionData = await Region.destroy({
        where: {
            id: req.params.id,
        },
        });
        // return confirmation of column deletion
        return res.json(regionData);
    // if err throw err
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;