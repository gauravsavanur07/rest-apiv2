const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Restaurant = require('../models/Restaurant');

// Handling incoming get requests to /order
router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Handle get requests to the file'
    });
});
router.post('/', (req,res,next) => {
   
    const restaurant = new Restaurant({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.cuizine,
        location: req.body.location,
        allergies:req.body.allergies
    });
    restaurant.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(200).json({
        message: 'Handle POST requests to the restaurant',
        createdRestaurant: restaurant
    });
});
router.get('/:restaurantId', (req,res,next) => {
    const id = req.params.restaurantId;

    if (id ==='special'){
        res.status(200).json({
            message: 'You discovered a special id'
        });
    }
    else {
        res.status(200).json({
            message: 'you have passed the id'
        });
    }
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
        res.status(200).json(result);
    }).catch(err => {
        res.status(200).json({
            error:err
        });
       
    });
});

router.get('/', (req,res,next) => {
   Restaurant.find()
   .exec()
   .then(docs => {
       console.log(docs);
       res.status(200).json(docs);
   })
   .catch(err => {
       console.log(err);
       res.status(500).json({
           error: err
       })
   })
});
module.exports = router;