const {Pool} = require('pg');
var message = '';

let pool;
const URL = 'postgres://tjazoeceoycwvg:057769f8f752c8db628d229ea5c015893752d5a7fe45545740d473029bcc3b7e@ec2-54-147-209-121.compute-1.amazonaws.com:5432/d8s34dkaa8r8kh';
pool = new Pool ({connectionString:URL, ssl:false});
//pool = new Pool({ user:'admin', host: 'localhost', database: 'school', password:'', port: 5432});


//router(app)
const router = function(app) {
    app.get('/', (req,res) => {
        res.render('index');
    })
 
    app.get('/students', (req,res) => {
         //dbh students local users
        pool.query('Select fname,lname from students', (err,results)=>{
            if(err){
                return err;
             } else {
                 //console.log('reslt******',results.rows);
                 res.render('stud',{students:results.rows});
             }
        })
    })
    app.post('/students', (req,res) => {
      
        const {fname,lname,address,date_birth,sex} = req.body;
        console.log(req.body)
        if ((fname=='')||(lname=='')||(address=='')||(date_birth=='')||(sex=='')){
            return res.render('stud',{message:'Entered data is not correct'});
        } else{
            //dbh students local users
            pool.query('INSERT INTO students (fname, lname, address, data_birth,sex) VALUES ($1,$2,$3,$4,$5)', 
            [fname, lname, address, date_birth, sex], (error,results) =>{
                if (error){
                  throw error;
                } else {
                    res.redirect('/students');
                }
            })
        }
    })
}


module.exports = router;