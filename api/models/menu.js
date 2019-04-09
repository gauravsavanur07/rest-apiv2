const mongoose = require('mongoose');
 const menuSchema = mongoose.Schema({
     _id: mongoose.Types.ObjectId, 
     name: String,
     price: Number,
     calories: String
 })

 module.exports = mongoose.model('Menu', menuSchema);