var express = require('express');
var db = require('../mysql.js');

var router = express.Router();

router.get('/', function(req, res) {
    res.render('login');
});

module.exports = router;