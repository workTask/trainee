const operations = require('../logica/calculate');

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