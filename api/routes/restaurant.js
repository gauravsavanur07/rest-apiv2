const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Restaurant = require('../models/Restaurant');

// Handling incoming get requests to /order
router.get("/", (req,res,next) => {
    Restaurant.find().exec()
    .then(docs =>{
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});
router.post('/', (req,res,next) => {
   
    const restaurant = new Restaurant({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        cuisine: req.body.cuisine,
        location: req.body.location,
        latitude: req.body.latitude,
        longitude:req.body.longitude,
        allergies:req.body.allergies,
        
    });
    restaurant.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(200).json({
        message: 'Handle Restaurants ',
        createdRestaurant: restaurant
    });
});
router.get("/:restaurantId", (req,res,next) => {
    const id = req.params.restaurantId;

    Restaurant.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err =>  {
        console.log(err);
        res.status(500).json({error :err});
    });
});

router.patch('/:restaurantId', (req,res,next) => {
    const id = req.params.restaurantId;
    const updateOps = {};
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    Restaurant.update({ _id :id}, {$set: updateOps})
    .exec()
    .then (result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
});

router.delete('/:restaurantId', (req,res,next) => {
    const id = req.params.restaurantId;
    Restaurant.remove({_id:id  }).exec()
    .then(result => {
        res.status(200).json({
            message: 'Product deleted ',
            request: {
                type : 'POST',
                url: 'http://localhost3000/restaurant',
                data :{
                    name: 'String',
                    cuisine: 'String'
                }
            }
        });
    }).catch(err => {
        res.status(200).json({
            error:err
        });
       
    }); 
});

router.get("/", (req,res,next) => {
   Restaurant.find()
   .exec()
   .then(docs => {
       console.log(doc);
       res.status(200).json(doc);
   })
   .catch(err => {
       console.log(err);
       res.status(500).json({
           error: err
       });
   });
});
module.exports = router;