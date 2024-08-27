const Joi = require('joi');

 const dataAnalysisSchema = Joi.object({
    _id:Joi.string().required(), 
    nameCompany: Joi.string().required(), 
    CurrentAssets: Joi.string().required(), 
    CurrentLiabilities: Joi.string().required(), 

})

module.exports= {dataAnalysisSchema}