const express = require('express');
const router = express.Router();
const db = require('./db');

const QUERY_SOCIOS = 'SELECT * FROM socios';

//Get all associates
router.get('/all', (req, res) => {
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

//Get single associate
router.get('/single/:id', (req, res) => {
    let sql = `SELECT * FROM socios WHERE stam = ${req.params.id}`;
    db.query(sql, (err, results) => {
        if(err){
            return res.send(err);
        }
        else{
            return res.json({
                data:results
            })
        }
    })
});

module.exports = router;