const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError');

const financeSchema= new Schema({


  nameCompany:  {
      type: String,
    },

  currentAssets: {
      type: String,
    },

  currentLiabilities: {
      type: String,
    },

  stocks: {
      type: String,
    },

  money: {
      type: String,
    },

  equity: {
    type: String,
  },

  totalAssets: {
    type: String,
  },

  liabilities: {
    type: String,
  },

  longTermLiabilities: {
    type: String,
  },

  netProfit: {
    type: String,
  },

  revenue: {
    type: String,
  },

  cost: {
    type: String,
  },

  stocksFirst :{
    type: String,
  },

  stocksFinish: {
    type: String,
  },

  accountsReceivableFist: {
    type: String,
  },

  accountsReceivableFinish: {
    type: String,
  },
  
  longTermFinancialInvestments: {
    type: String,
  },

  currentFinancialInvestments: {
    type: String,
  },
  
  interestExpenses: {
    type: String,
  },

  operatingProfit: {
    type: String,
  },

  owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    }

  // id:{
  //   type: String,
  // },

  //   nameCompany:  {
  //       type: String,
  //     },

  //   equityRatio:  {
  //       type: String,
  //     },
  //   debtToEquityRatio:  {
  //       type: String,
  //     },
  //   financialStabilityRatio:  {
  //       type: String,
  //     }, 
  //   assetTurnoverRatio:  {
  //       type: String,
  //     }, 
  //   inventoryTurnoverRatio:  {
  //       type: String,
  //     },
  //   accountsReceivableTurnoverRatio:  {
  //       type: String,
  //     },
  //   returnonAssets:  {
  //       type: String,
  //     },
  //   returnOnEquity:  {
  //       type: String,
  //     },
  //   returnOnSales:  {
  //       type: String,
  //     },
  //   currentRatio:  {
  //       type: String,
  //     },
  //   quickRatio:  {
  //       type: String,
  //     },
  //   cashRatio: {
  //       type: String,
  //     },
  //   returnOnInvestment:  {
  //       type: String,
  //     },
  //   interestCoverageRatio: {
  //       type: String,
  //     },
  //   comment: {
  //       type: String,
  //     },
    // owner: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'user',
    //   }

},{versionKey:false, timestamps:true});

financeSchema.post('save', handleMongooseError);

const Finance = model('finance-analysis', financeSchema);

module.exports = Finance;