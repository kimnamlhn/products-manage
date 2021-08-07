const express = require('express');
const exphbs  = require('express-handlebars');
const port = 3000;

const app = express();
const db  = require('./utils/db');


//connect database mongodb
db.connect();

//set static folder
app.use(express.static(__dirname + '/resources'));



//view engine middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');



//middlewares
require('./middlewares/routes.mdw')(app);
require('./middlewares/error.mdw')(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })