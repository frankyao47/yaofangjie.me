var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

//bodyParser middleware
router.use(bodyParser.urlencoded({
    extended: true
}));

router.get('/', function(req, res) {
    res.send('blog');
});

router.route('/create')
    .get(function(req, res, next) {
        res.render('blog/create');
    })
    .post(function(req, res, next) {
        console.log(req.body);
        res.send(req.body);
    });


module.exports = router;