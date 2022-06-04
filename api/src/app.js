// const cookieParser = require('cookie-parser'); //Trabajr con cookies
// server.use(express.urlencoded({ extended: true, limit: '50mb' })); 
// server.use(cookieParser());
const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const server = express();


const cors = require('cors');
const listAllUsers = require('./utils/usersFB.js');
server.name = 'API';
server.use(express.json());
server.use(morgan('dev'));
server.use(cors({
    origin: '*',
    credentials: true,
  }));
 listAllUsers();
server.use('/', routes);

 
// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);  
});

module.exports = server;
