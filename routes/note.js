const {Pool} = require('pg');
let pool;
const URL = 'postgres://tjazoeceoycwvg:057769f8f752c8db628d229ea5c015893752d5a7fe45545740d473029bcc3b7e@ec2-54-147-209-121.compute-1.amazonaws.com:5432/d8s34dkaa8r8kh';
pool = new Pool ({connectionString:URL, ssl:false});
//pool = new Pool({ user:'admin', host: 'localhost', database: 'school', password:'', port: 5432});

//start in app.js enter note(app);
const router = function(app) {

    app.get('/note', (req,res) => {
            console.log('get notes ');
        pool.query('Select * from notes', (err,results)=>{
            if(err){
                return err;
            } else {
                //console.log('reslt******',results.rows);
                res.render('note',{notes:results.rows});
            }
        })
    });
    app.get('/note/:id', (req,res) => { 
        console.log('***********',req.params.id)
        pool.query('Select * from notes WHERE id=$1 ', [req.params.id], (err,results)=>{
            if(err){
                return err;
            } else {
                console.log('reslt******',results.rows[0]);
                res.sendStatus(results.rows[0].nameNote);
            }
        })
    });
    app.post('/createNote', (req,res) => {
        pool.query('INSERT INTO notes (name,description) VALUES ($1,$2)',[req.body.nameNote,req.body.description], (err,results)=>{
            if(err){
                return err;
            } else {
                //console.log('reslt******',results.rows);
                res.redirect('/note');
            }
        })
    });
    //!!!!!!!!!!!!!!!
    app.post('/deleteNote', (req,res) => { 
        console.log('**delete*********',req.body);
        pool.query('DELETE FROM notes WHERE name=$1', [req.body.nameNote], (err,results)=>{
            if(err){
                return err;
            } else {
                res.redirect('/note');
            }
        })
    }); 
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    app.post('/editNote', (req,res) => { 
        console.log('***********',req.body.nameNote);
        pool.query('UPDATE notes SET description=$2 WHERE name=$1', [req.body.nameNote, req.body.description], (err,results)=>{
            if(err){
                return err;
            } else {
                res.redirect('/note');
            }
        })
    });  
}
module.exports = router;