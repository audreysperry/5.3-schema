const express = require('express');
const handlebars = require ('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const router = require('./routes');
const app = express();

var database = process.env.MONGODB_URI || 'mongodb://localhost:27017/sweaterdb';
mongoose.connect(database);


app.engine('handlebars', handlebars({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');

app.use('/static', express.static('public'));


app.use(bodyParser.urlencoded({extended: false}));


router(app);


app.listen(process.env.PORT || 3000);
