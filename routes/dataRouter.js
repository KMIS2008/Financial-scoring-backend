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


      module.exports = dataRouter;