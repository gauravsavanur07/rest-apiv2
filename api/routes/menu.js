//importing the express framework
const express = require ('express');
//importing the API router(url) using express
const router = express.Router();
//importing the mongoose
const mongoose = require('mongoose');

//modeling the variable menu
const Menu = require('../models/menu'); 

router.get('/', (req, res, next) => {
    Menu.find().exec().then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
router.post('/', (req, res, next) => {
   //created a new menu instance using mongoose
    const menu = new Menu({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        calories: req.body.calories
    });
    //adds to the database (mongoose method)
    menu.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Handling POST requests to /menu',
            createdMenu: result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err 
        });
    })
   
})

router.get('/:menuId', (req, res, next) => {
    const id = req.params.menuId;
    Menu.findById(id)
    .exec()
    .then(doc => {
        console.log("From the database", doc);
        if (doc) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({message: 'No valid entry found for the given ID'});
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })   

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
//exporting the API router using module
module.exports = router;