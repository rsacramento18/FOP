const express = require('express')
const router = express.Router()
const db = require('./db')

//How to do a post in express
// router.post('/test', function(request, response){
//   console.log(request.body);
//   response.send(request.body);
// })

router.get('/all/fop/:club', (req, res) => {
  let clube = req.params.club
  let sql= ""

  if(clube !== undefined) {
    sql= `SELECT socios.stam, socios.nome FROM socios INNER JOIN socios_clubes ON socios.stam=socios_clubes.stam WHERE clube = '${clube}'`
  }
  else {
    sql= `SELECT socios.stam, socios.nome FROM socios`
  }

  db.query(sql, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
})


router.get('/single/:id/:club', function(req, res) {
  let stam = req.params.id
  let clube = req.params.club
  let sql= ""

  if(clube !== undefined) {
     sql = `SELECT * FROM socios INNER JOIN socios_clubes ON socios.stam=socios_clubes.stam WHERE socios.stam = '${stam}' AND clube = '${clube}'`
  }
  else{
     sql = `SELECT * FROM socios WHERE socios.stam = ${stam}`
  }

  db.query(sql, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
})

router.get('/all/fonp', (req, res) => {
  sql= `SELECT * FROM contasociofonp`

  db.query(sql, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
})

router.get('/all/international', (req, res) => {
  sql= `SELECT * FROM contasestrangeiro`

  db.query(sql, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json({
        data: results
      })
    }
  })
})

module.exports = router
