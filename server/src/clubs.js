const express = require('express')
const router = express.Router()
const db = require('./db')

router.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 }
)
router.get('/all/fop', (req, res) => {
  sql= `SELECT nome_clube, sigla, morada, imagem, site, email  FROM clubes`

  db.query(sql, (err, results) => {
    if (err) {
      return res.send(err)
    } 
    else {
      return res.json(results)
    }
  })
})

module.exports = router