const Joi = require('joi');

 const financeAnalysisSchema = Joi.object({
    _id:Joi.string().required(), 
    nameCompany: Joi.string(), 
    equityRatio: Joi.string(), 
    debtToEquityRatio: Joi.string(), 
    financialStabilityRatio: Joi.string(), 
    assetTurnoverRatio: Joi.string(), 
    inventoryTurnoverRatio: Joi.string(), 
    accountsReceivableTurnoverRatio: Joi.string(), 
    returnonAssets: Joi.string(), 
    returnOnEquity: Joi.string(), 
    returnOnSales: Joi.string(), 
    currentRatio: Joi.string(), 
    quickRatio: Joi.string(), 
    cashRatio: Joi.string(), 
    returnOnInvestment: Joi.string(), 
    interestCoverageRatio: Joi.string(), 
})

module.exports= {financeAnalysisSchema}