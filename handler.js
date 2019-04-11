
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
const connectToDatabase = require('./db');
const mongoose = require('mongoose');
const Restaurant = require('./restaurant');

module.exports.create =  (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Restaurant.create(JSON.parse(event.body))
        .then(Restaurant => callback(null, {
          statusCode: 200,
          body: JSON.stringify(Restaurant)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not create the Restaurant.'
        }));
    }); 
};

module.exports.getOne = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Restaurant.findById(event.pathParameters.id)
        .then(Restaurant => callback(null, {
          statusCode: 200,
          body: JSON.stringify(Restaurant)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the Restaurant.'
        }));
    });
};

module.exports.getAll = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Restaurant.find()
        .then(Restaurants => callback(null, {
          statusCode: 200,
          body: JSON.stringify(Restaurants)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the Restaurants.'
        }))
    });
};

module.exports.update = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Restaurant.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), { new: true })
        .then(Restaurant => callback(null, {
          statusCode: 200,
          body: JSON.stringify(Restaurant)
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the Restaurants.'
        }));
    });
};

module.exports.delete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase()
    .then(() => {
      Restaurant.findByIdAndRemove(event.pathParameters.id)
        .then(Restaurant => callback(null, {
          statusCode: 200,
          body: JSON.stringify({ message: 'Removed Restaurant with id: ' + Restaurant._id, Restaurant: Restaurant })
        }))
        .catch(err => callback(null, {
          statusCode: err.statusCode || 500,
          headers: { 'Content-Type': 'text/plain' },
          body: 'Could not fetch the Restaurants.'
        }));
    });
};
