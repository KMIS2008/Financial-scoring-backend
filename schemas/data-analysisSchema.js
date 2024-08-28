const Joi = require('joi');

 const dataAnalysisSchema = Joi.object({
    _id:Joi.string().required(), 
    nameCompany: Joi.string().required(), 
    currentAssets: Joi.string().required(), 
    currentLiabilities: Joi.string().required(), 
    stocks: Joi.string().required(), 
    money: Joi.string().required(),
    equity: Joi.string().required(),
    totalAssets: Joi.string().required(),
    liabilities: Joi.string().required(),
    longTermLiabilities: Joi.string().required(),

})

module.exports= {dataAnalysisSchema}