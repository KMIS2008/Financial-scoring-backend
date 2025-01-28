const express = require ("express");
const ctrl= require('../controllers/dataControlers.js');
const schema = require ('../schemas/data-analysisSchema.js');
const validateBody = require ('../helpers/validateBody.js');
// const isValidId = require('../middlewares/isValidId');
// const authdentificate = require('../middlewares/authdentificate.js');

const dataRouter=express.Router();

dataRouter.get("/", 
    // authdentificate, 
    ctrl.getData);

dataRouter.post("/",
    //  authdentificate,
      validateBody(schema.dataAnalysisSchema), ctrl.addData);

const updateCartQuantity = async (req, res) => {
    try {

        const { _id, quantity } = req.body;

        if (!_id || quantity === undefined) {
            return res.status(400).json({ message: "Missing required fields: _id or quantity" });
        }

        const updatedCart = await Cart.findOneAndUpdate(
            { _id },
            { quantity },
            { new: true }
        );

        if (!updatedCart) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


      module.exports = dataRouter;