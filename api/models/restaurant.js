const mongoose =  require('mongoose');

const restaurantSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    cuisine:String,
    location:Number,
    allergies:String


});
module.exports = mongoose.model('Restaurant', restaurantSchema);