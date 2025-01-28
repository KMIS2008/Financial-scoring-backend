const Joi = require('joi');


 const financeAnalysisSchema = Joi.object({

    accountsReceivableFinish: Joi.string(), 
    accountsReceivableFist: Joi.string(), 
    comment: Joi.string(), 
    cost: Joi.string(), 
    currentAssets: Joi.string(), 
    currentFinancialInvestments: Joi.string(), 
    currentLiabilities: Joi.string(), 
    equity: Joi.string(), 
    id: Joi.string(), 
    interestExpenses: Joi.string(), 
    liabilities: Joi.string(), 
    longTermFinancialInvestments:  Joi.string(), 
    longTermLiabilities: Joi.string(), 
    money: Joi.string(), 
    nameCompany: Joi.string(), 
    netProfit: Joi.string(), 
    operatingProfit: Joi.string(), 
    revenue: Joi.string(), 
    stocks: Joi.string(), 
    stocksFinish: Joi.string(), 
    stocksFirst: Joi.string(), 
    totalAssets: Joi.string(), 
 

    // id:Joi.string(), 
    // nameCompany: Joi.string(), 
    // equityRatio: Joi.string(), 
    // debtToEquityRatio: Joi.string(), 
    // financialStabilityRatio: Joi.string(), 
    // assetTurnoverRatio: Joi.string(), 
    // inventoryTurnoverRatio: Joi.string(), 
    // accountsReceivableTurnoverRatio: Joi.string(), 
    // returnonAssets: Joi.string(), 
    // returnOnEquity: Joi.string(), 
    // returnOnSales: Joi.string(), 
    // currentRatio: Joi.string(), 
    // quickRatio: Joi.string(), 
    // cashRatio: Joi.string(), 
    // returnOnInvestment: Joi.string(), 
    // interestCoverageRatio: Joi.string(), 
    // comment: Joi.string(),
})


module.exports= {financeAnalysisSchema}