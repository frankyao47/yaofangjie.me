var express = require('express');
var path = require('path');
var blog = require('./router/blog.js');
var login = require('./router/login.js')

var app = express();

app.set('view engine', 'ejs'); //use ejs(js syntax) as template engine, render() will search views directory

app.set('views', path.join(__dirname, 'views')); //views
app.use(express.static(path.join(__dirname, 'static'))); //static resources

app.use('/blog', blog);
app.use('/admin', login);

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(3000);