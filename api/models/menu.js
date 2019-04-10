const mongoose = require('mongoose');
 const menuSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId, 
     name: String,
     price: Number,
     calories: String
 })

 module.exports = mongoose.model('Menu', menuSchema);