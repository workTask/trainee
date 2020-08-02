const operations = require('../logica/calculate');
const {Pool} = require('pg');
let pool;
//const URL = 'postgres://tjazoeceoycwvg:057769f8f752c8db628d229ea5c015893752d5a7fe45545740d473029bcc3b7e@ec2-54-147-209-121.compute-1.amazonaws.com:5432/d8s34dkaa8r8kh';
 // pool = new Pool ({connectionString:URL, ssl:false});
  pool = new Pool({ user:'admin', host: 'localhost', database: 'school', password:'', port: 5432});

//router(app)
const router = function(app) {
       app.get('/calculate', (req,res) => {
        res.render('calc');
    })
      app.post('/calculate', (req,res) => {
        const operator = req.body.operator;
        const num1= Number(req.body.number1);
        const num2= Number(req.body.number2);  
        const ans =operations(operator,num1,num2);
        const answer =num1+operator+num2+'='+operations(operator,num1,num2);
        res.render('calc', {answer:answer,ans:ans});
    })
    
}
module.exports = router;