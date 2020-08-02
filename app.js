const express = require('express');
const bodyParser=require('body-parser');
const hbs = require('hbs');
const path = require('path');
// my 
const studentRouter = require('./routes/student')
const calcRouter = require('./routes/calculate')
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT ||2001;
//middleware
// for form in html
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public')));

//app.set('view engine','ejs');
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials');


studentRouter(app);
calcRouter(app);

app.listen(port, (error) => {
 if (error){
    return console.log(`Error ${error}`)
 } 

 return console.log(`Server adress on port ${port}`)
});

