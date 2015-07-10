var express = require('express');
var router = express.Router();
var vd = require('../videodata.json');

/* GET products page. */
router.get('/', function(req, res, next) {
    res.render('products', {
        title: 'Products',
        videodata: vd
    });
});

module.exports = router;