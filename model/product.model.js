const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
    name: String, 
    description: String,
    prince: Number,
    numProduct: Number,
    image: String

});

module.exports = mongoose.model('Product',productSchema);
