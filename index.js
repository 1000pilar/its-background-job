var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var recipes = require('./routes/api.js')

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost:background-job-kue')
console.log(`connect to mongodb`);
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api', recipes)


app.listen(3000)
console.log('Connected to port 3000');
