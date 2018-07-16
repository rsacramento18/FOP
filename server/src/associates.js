const express = require('express')
const router = express.Router()
const db = require('./db')

// Get all associates
// - - - - - Can be with club(club)
router.get('/all/fop', (req, res) => {
  let clube = req.param('club')
  let sql= ""

  if(clube !== undefined) {
    sql= `SELECT stam, nome FROM socios INNER JOIN socios_clubes ON socios.stam=socios_clubes.stam WHERE clube = ${clube}`
  }
  else {
    sql= `SELECT stam, nome FROM socios`
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

// Get single associate
// - - - - - Required id(stam) but not club(clube)
router.get('/single', (req, res) => {
  let stam = req.param('id')
  let clube = req.param('club')
  let sql= ""

  if(clube !== undefined) {
     sql = `SELECT * FROM socios INNER JOIN socios_clubes ON socios.stam=socios_clubes.stam WHERE socios.stam = ${stam} AND clube = ${clube}`
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
