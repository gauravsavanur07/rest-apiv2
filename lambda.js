const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

// lambda.js
//updated file from node to lambda
// 'use strict'

// // lambda.js
// // 'use strict'

// const awsServerlessExpress = require('aws-serverless-express')
// const app = require('./app')
// const server = awsServerlessExpress.createServer(app)

// exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }
