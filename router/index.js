var express = require('express');
var db = require('../mongo.js');

var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

module.exports = router;