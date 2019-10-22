const express = require('express');
const mongoose = require('mongoose');

const user = require('./User');

const app = express();

const mongo_uri = 'mongodb://localhost/auth';

mongoose.connect(mongo_uri, function(err) {
    console.log(`Successfully connected to ${mongo_uri}`);
});

const port = 3001;

app.get('/api/home', function(req, res) {
    res.send('Welcome!');
});

app.get('/api/secret', function(req, res) {
    res.send('The password is potato');
});

app.listen(port, () => console.log(`listening on port ${port}`));