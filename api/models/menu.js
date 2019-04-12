const mongoose = require('mongoose');
 const menuSchema = mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId, 
     restaurant_name: String,
     meal_name: String,
     price: Number,
     calories: String,
     nutrition: String
 })

 module.exports = mongoose.model('Menu', menuSchema);