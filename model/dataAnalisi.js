const { Schema, model}= require('mongoose');
const handleMongooseError= require('../helpers/handleMongooseError');

const dataSchema= new Schema({
    _id: { type: String},

    name:  {
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