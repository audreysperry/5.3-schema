const express = require('express');
const handlebars = require ('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const router = require('./routes');
const app = express();

mongoose.connect('mongodb://localhost:27017/sweaterdb')


app.engine('handlebars', handlebars({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');


app.use(bodyParser.urlencoded({extended: false}));


router(app);
app.listen(3000);
