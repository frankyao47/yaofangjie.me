var express = require('express');
var bodyParser = require('body-parser');

var db = require('../mysql.js');
var Blog = db.Blog;

var router = express.Router();

//bodyParser middleware
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/', function(req, res) {
    res.send('blog');
});

// list all blogs, further may be changed to api
router.route('/list')
    .get(function(req, res, next) {
        Blog.findAll({
            raw: true
        }).then(function(data) {
            res.send(data);
        });
    });

// create blog
router.route('/create')
    .get(function(req, res, next) {
        res.render('blog/create');
    })
    .post(function(req, res, next) {
        Blog.create({ 
            title: req.body.title, 
            content: req.body.content,
            brief: req.body.content.substr(0, 200)
        }).then(function(blog) {
            console.log(blog);
        })
        res.redirect('list');
    });


module.exports = router;