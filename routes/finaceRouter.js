const express = require ("express");
const ctrl= require('../controllers/financeControlers.js');
const schema = require ('../schemas/finance-analysisSchema.js');
const validateBody = require ('../helpers/validateBody.js');
// const isValidId = require('../middlewares/isValidId');
// const authdentificate = require('../middlewares/authdentificate.js');

const financeRouter=express.Router();

financeRouter.get("/", 
    // authdentificate, 
    ctrl.getFinance);

financeRouter.post("/",
    //  authdentificate,
      validateBody(schema.financeAnalysisSchema), ctrl.addFinance);

financeRouter.put("/update", 
    // authdentificate,
     validateBody(schema.financeAnalysisSchema), ctrl.updateFinance);

      module.exports = financeRouter;