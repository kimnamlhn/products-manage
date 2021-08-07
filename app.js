const express = require('express');
const exphbs  = require('express-handlebars');
const port = 3000;

const app = express();

const db  = require('./utils/db');

db.connect();

//set static folder
app.use(express.static(__dirname + '/resources'));


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })