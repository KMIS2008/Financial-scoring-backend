const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError');

const financeSchema= new Schema({
    _id: { type: String},

    nameCompany:  {
        type: String,
      },

    equityRatio:  {
        type: String,
      },
    debtToEquityRatio:  {
        type: String,
      },
    financialStabilityRatio:  {
        type: String,
      }, 
    assetTurnoverRatio:  {
        type: String,
      }, 
    inventoryTurnoverRatio:  {
        type: String,
      },
    accountsReceivableTurnoverRatio:  {
        type: String,
      },
    returnonAssets:  {
        type: String,
      },
    returnOnEquity:  {
        type: String,
      },
    returnOnSales:  {
        type: String,
      },
    currentRatio:  {
        type: String,
      },
    quickRatio:  {
        type: String,
      },
    cashRatio: {
        type: String,
      },
    returnOnInvestment:  {
        type: String,
      },
    interestCoverageRatio: {
        type: String,
      },
    comment: {
        type: String,
      },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }

},{versionKey:false, timestamps:true});

financeSchema.post('save', handleMongooseError);

const Finance = model('finance-analysis', financeSchema);

module.exports = Finance;