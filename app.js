const express = require('express');
const bodyParser=require('body-parser');
const hbs = require('hbs');
const path = require('path');

const studentRouter = require('./routes/students');
const calcRouter = require('./routes/calculate');
const noteRouter = require('./routes/note');

const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT ||2000;
//middleware
// for form in html
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public')));

//app.set('view engine','ejs');
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerPartials(__dirname+'/views/noteModal');


studentRouter(app);
calcRouter(app);
noteRouter(app);

app.listen(port, (error) => {
 if (error){
    return console.log(`Error ${error}`)
 } 

 return console.log(`Server adress on port ${port}`)
});

