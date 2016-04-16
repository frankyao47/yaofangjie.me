var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var config = require('./config.js'); //config file
var index = require('./router/index.js');
var blog = require('./router/blog.js');
var login = require('./router/login.js');

mongoose.connect(config.db.address);
var app = express();


//config
app.set('view engine', 'ejs'); //use ejs(js syntax) as template engine, render() will search views directory
app.set('views', path.join(__dirname, 'views')); //views
app.use(express.static(path.join(__dirname, 'static'))); //static resources


//router
app.use('/', index);
app.use('/blog', blog);
app.use('/admin', login);


app.listen(3000);