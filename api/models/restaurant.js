const mongoose =  require('mongoose');

const restaurantSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type : String , required: true},
    cuisine:{type : String , required: true},
    location:{type : String , required: true},
    latitude: Number  ,
    longitude: Number  ,
    allergies:{type : String , required: true}


});
module.exports = mongoose.model('Restaurant', restaurantSchema);