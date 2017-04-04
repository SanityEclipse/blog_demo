require('dotenv').config();

const app = express();
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const queries = require ('../db/queries');

const index = require('./routes/index');
const users = require('./routes/users');

const express = require('express');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/../client')));
app.use(express.static(path.join(__dirname, '/../', 'node_modules')));

app.use('/api/v1', index);
app.use('/api/v1', users);

app.use(function(err, req, res, next) {
  const response = { message: err.message }
  if(req.app.get('env') === 'development') {
    response.stack = err.stack
  }
  res.status(err.status || 500);
});

module.exports = app;