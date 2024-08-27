const Joi = require('joi');

 const dataAnalysisSchema = Joi.object({
    _id:Joi.string().required(), 
    nameCompany: Joi.string().required(), 
    currentAssets: Joi.string().required(), 
    currentLiabilities: Joi.string().required(), 
    stocks: Joi.string().required(), 

})

module.exports= {dataAnalysisSchema}