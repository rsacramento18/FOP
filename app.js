
const express = require('express');
const mysql = require('mysql');

const app = express();

const QUERY_SOCIOS = 'SELECT * FROM SOCIOS';

//Create connection
const db = mysql.createConnection({
    host : 'fop.com.pt',
    user : 'rsacramento',
    password : 'Sacramento1991',
    database : 'fop_aplicacao'
});

//Connect

db.connect((err) =>{
    if(err){
       throw err;
    }
    console.log('Mysql Connected');
});

app.get('/', (req, res) => {
    console.log('go to /products')
});
app.get('/products', (req, res) => {
    db.query(QUERY_SOCIOS, (err, results) =>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data: results
            })
        }
    });
});


app.listen('3000', () => {
    console.log('Server started on port 3000');
});