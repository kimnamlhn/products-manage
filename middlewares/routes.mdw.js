module.exports = function(app) {
    app.use('/', require('../routes/home.route'));
    app.use('/product', require('../routes/product.route'));


    

}