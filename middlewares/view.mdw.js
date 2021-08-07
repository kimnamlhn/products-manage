const exphbs  = require('express-handlebars');


module.exports = function(app){

//view engine middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


}