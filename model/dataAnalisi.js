const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError');

const dataSchema= new Schema({
    _id: { type: String},

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

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }

},{versionKey:false, timestamps:true});

dataSchema.post('save', handleMongooseError);

const Data = model('data-analysi', dataSchema);

module.exports = Data;