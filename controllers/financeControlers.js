const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const Finance =require('../model/financeAnalisis.js');

const getFinance = async (req, res, next) => {
    // const {_id: owner} =req.user;

    const allFinance = await Finance.find(
        // { owner }
    );
    
    res.status(200).json(allFinance);  
}; 

const addFinance = async(req, res, next)=>{
    // const {_id: owner}=req.user;
    const newFinance = await Finance.create({...req.body, 
        // owner
    });
   
    res.status(201).json(newFinance);
}

const updateFinance = async (req, res) => {
    try {

        const { _id} = req.body;

        if (!_id === undefined) {
            return res.status(400).json({ message: "Missing required fields: _id" });
        }

        const updateFinance = await Finance.findOneAndUpdate(
            { _id },
            req.body,
            { new: true }
        );

        if (!updateFinance) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json(updateFinance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getFinance: ctrlWrapper(getFinance),
    addFinance:ctrlWrapper(addFinance),
    updateFinance:ctrlWrapper(updateFinance),
}