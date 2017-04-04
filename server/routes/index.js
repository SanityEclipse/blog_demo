'use strict'; 

const express = require('express');
const router = express.Router();


// GET method route
app.get('/api/v1/blog_entries', function (req, res, next) {
  queries.getEntries()
  .then(function(data){
    res.json(data);
  })
});

// POST method route
app.post('/api/v1/blog_entries', function (req, res, next) {
  queries.createEntries(req.body)
  .then(function(data){
    res.json(data);
  })
});

app.use('*', function (req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '/../client')
  })
})

module.exports = router;
