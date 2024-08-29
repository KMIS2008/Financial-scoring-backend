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
    netProfit: Joi.string().required(),
    revenue: Joi.string().required(),
    cost: Joi.string().required(),
    stocksFirst: Joi.string().required(),
    stocksFinish: Joi.string().required(),
    accountsReceivableFist: Joi.string().required(),
    accountsReceivableFinish: Joi.string().required(),
    longTermFinancialInvestments: Joi.string().required(),
    currentFinancialInvestments: Joi.string().required(),
    operatingProfit: Joi.string().required(),
    interestExpenses: Joi.string().required(),

})

module.exports= {dataAnalysisSchema}