const mongoose = require('mongoose');

const {Schema} = mongoose;

const citySchema = new Schema({
key : {type:String},
cityName : String,

country:  {type: mongoose.Schema.Types.ObjectId, ref:'Country'},
});


const City = mongoose.model('City', citySchema);


exports.City = City;