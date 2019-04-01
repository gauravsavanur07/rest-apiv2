const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Restaurant = require('../model/Restaurant');

// Handling incoming get requests to /order
router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Handle get requests to the file'
    });
});
router.post('/', (req,res,next) => {
    const restaurant = {
        name:req.body.name,
        cuisine:req.body.price,
        location:req.body.location,
        allergies:req.body.allergies
    };
    const Restaurant = new Restaurant({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.cuizine,
        location: req.body.location,
        allergies:req.body.allergies
    });
    product.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));
    res.status(200).json({
        message: 'Handle POST requests to the /products',
        createdRestaurant: restaurant
    });
});
router.get('/:restaurantId', (req,res,next) => {
    const id = req.params.productId;

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
    res.status(200).json({
        message : 'Updated restaurant'
    })
});

router.delete('/:restaurantId', (req,res,next) => {
    res.status(200).json({
        message : 'delete restaurant'
    })
});

router.get('/:', (req,res,next) => {
    res.status(200).json({
        message: 'Handle get requests to the file'
    });
});
module.exports = router;