const {Pool} = require('pg');
let pool;
//const URL = 'postgres://tjazoeceoycwvg:057769f8f752c8db628d229ea5c015893752d5a7fe45545740d473029bcc3b7e@ec2-54-147-209-121.compute-1.amazonaws.com:5432/d8s34dkaa8r8kh';
//pool = new Pool ({connectionString:URL, ssl:false});
//  pool = new Pool({ user:'admin', host: 'localhost', database: 'school', password:'', port: 5432});

//router(app)
const router = function(app) {
       app.get('/note', (req,res) => {
        res.render('note');
    })
      
}
module.exports = router;