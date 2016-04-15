var express = require('express');
var blog = require('./router/blog.js');
var login = require('./router/login.js')

var app = express();

app.set('view engine', 'ejs'); //use ejs(js syntax) as template engine, render() will search views directory

app.use('/views', express.static(__dirname + '/views')); //views
app.use('/static', express.static(__dirname + '/static')); //static resources
app.use('/blog', blog);
app.use('/admin', login);

app.get('/', function(req, res) {
    res.render('index');
})

app.listen(3000);