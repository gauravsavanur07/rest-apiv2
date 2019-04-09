//importing the express framework
const express = require ('express');
//importing the API router(url) using express
const router = express.Router();
//importing the mongoose
const mongoose = require('mongoose');

//modelling the variable menu
const Menu = require('../models/menu'); 

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /menu'
    })
})

router.post('/', (req, res, next) => {
   //created a new menu using mongoose
    const menu = new Menu({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        calories: req.body.calories
    })
    //adds to the database
    menu.save();
    res.status(200).json({
        message: 'Handling POST requests to /menu'
    })
})

router.get('/:menuId',(req, res, next) => {
    const id = req.params.menuID;
    if (id === 'special'){
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:menuId',(req, res, next) => {
    res.status(200).json({
        message: 'Updated menu'
    })
})

router.delete('/:menuId',(req, res, next) => {
    res.status(200).json({
        message: 'Deleted menu'
    })
})

module.exports = router;