const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const restaurantRoutes = require('./api/routes/restaurant');
const itemRoutes = require('./api/routes/items');

mongoose.connect('mongodb+srv://gaurav:'+process.env.MONGO_ATLAS_ENV+'<gaurav@17114357>@cluster0-ycxzk.mongodb.net/test?retryWrites=true',
{
    useMongoClient: true
});
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
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
app.use('/items', itemRoutes);

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
module.exports =app;
