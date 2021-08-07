var express = require('express')
var router = express.Router()

router.get('/add_product', function (req, res) {
    res.render('product/add_product');
});

router.get('/edit_product', function (req, res) {
    res.render('product/edit_product');
});

router.get('/delete_product', function (req, res) {
    res.render('product/delete_product');
});



module.exports = router