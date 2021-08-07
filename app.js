const express = require('express');
const port = 3000;

const app = express();
const db  = require('./utils/db');

// Storing configuration in the environment separate from code 
require('dotenv').config()



//connect database mongodb
db.connect();

//set static folder
app.use(express.static(__dirname + '/resources'));



//middlewares
require('./middlewares/view.mdw')(app);
require('./middlewares/routes.mdw')(app);
require('./middlewares/error.mdw')(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })