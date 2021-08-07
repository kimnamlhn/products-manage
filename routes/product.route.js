var express = require('express')
var router = express.Router()

router.get('/add_product', function (req, res) {
    res.render('product/add_product');
});

router.get('/edit_product', function (req, res) {
    res.render('product/edit_product');
});

router.get('/del_product', function (req, res) {
    res.render('product/del_product');
});



module.exports = router