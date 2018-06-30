
const express = require('express');
const mysql = require('mysql');

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

const app = express();

app.listen('3000', () => {
    console.log('Server started on port 3000');
});