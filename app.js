const serverless = require("serverless-http");
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const restaurantRoutes = require("./api/routes/restaurant");
const itemRoutes = require("./api/routes/items");

mongoose.connect('mongodb+srv://gaurav:Qwerty%4012345@cluster0-ycxzk.mongodb.net/test?retryWrites=true',
{
    useNewUrlParser: true
}
);

app.use(morgan('dev'));
app.use('/uploads',express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false, UrlParser: true}));
app.use(bodyParser.json());

app.use((req,res,next) => {
   res.header('Access-Control-Allow-Origin', "*");
   res.header( "Origin, X-Requested-With, Content-Type, Accept, Authorization");
   if(req.method === 'OPTIONS'){
       res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
       return res.status(200).json({});
   }
   next();
});
//routes which should handle requests 


 app.use('/restaurant', restaurantRoutes);


const multer = require('multer');



const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './uploads/');
    },
    filename : function(req ,file,cb){
        cb(null, new Date().toISOString() + file.originalName);
    }
});
const fileFilter = (req, file, cb) => {
    //reject a file
    if(file.mimetype === 'image/jpeg' || file.mimeType == 'image.png'){
    cb(null,true);
}
else{
    cb(null,false);
}

};

const upload = multer({
    storage: storage, 
    limits:{
    fileSize: 1024 * 1024 *5
},
fileFilter :fileFilter
});


const Restaurant = require('./api/models/Restaurant');

// Handling incoming get requests to /order
app.get("/restaurant", function(req,res,next) {
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
app.post("/restaurant", upload.single('productImage') , function(req,res,next)  {
   console.log(req.file);
    const restaurant = new Restaurant({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        cuisine: req.body.cuisine,
        location: req.body.location,
        latitude: req.body.latitude,
        longitude:req.body.longitude,
        allergies:req.body.allergies,
        // productImage: req.file.path
        
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
app.get("/restaurant/:restaurantId", function(req,res,next) {
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


app.patch('/restaurant/:restaurantId', upload.single('productImage') ,function(req,res,next) {
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

app.delete('/restaurant/:restaurantId', function (req,res,next)  {
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
app.use('/items', itemRoutes);
app.use('/uploads',express.static('uploads'));
app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status =404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports.handler = serverless(app);
