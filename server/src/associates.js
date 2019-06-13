const express = require('express')
const router = express.Router()
const db = require('./db')

//How to do a post in express
// router.post('/test', function(request, response){
//   console.log(request.body);
//   response.send(request.body);
// })

router.get('/all/fop/:club?', (req, res) => {
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
      return res.json(results)
    }
  })
})


router.get('/single/:id', function(req, res) {
  let stam = req.params.id
  let sql= ""

  sql = `SELECT * FROM socios INNER JOIN socios_clubes ON socios.stam=socios_clubes.stam WHERE socios.stam = '${stam}'`

  db.query(sql, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json(results)
    }
  })
})

router.get('/all/fonp', (req, res) => {
  sql= `SELECT * FROM contasociofonp`

  db.query(sql, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json(results)
    }
  })
})

router.get('/all/international', (req, res) => {
  sql= `SELECT * FROM contasestrangeiro`

  db.query(sql, (err, results) => {
    if (err) {
      return res.send(err)
    } else {
      return res.json(results)
    }
  })
})

module.exports = router
