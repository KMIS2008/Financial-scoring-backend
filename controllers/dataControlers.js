const ctrlWrapper = require('../helpers/ctrlWrapper.js');
const Data =require('../model/dataAnalisi.js');

const getData = async (req, res, next) => {
    // const {_id: owner} =req.user;

    const allData = await Data.find(
        // { owner }
    );
    
    res.status(200).json(allData);  
}; 

const addData = async(req, res, next)=>{
    // const {_id: owner}=req.user;
    const newDdata = await Data.create({...req.body, 
        // owner
    });
   
    res.status(201).json(newDdata);
}

module.exports = {
    getData: ctrlWrapper(getData),
    addData:ctrlWrapper(addData),
}