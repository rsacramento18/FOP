const express = require('express')
const router = express.Router()
const db = require('./db')

const QUERY_SOCIOS = 'SELECT * FROM socios'

// Get all associates
router.get('/all', (req, res) => {
  db.query(QUERY_SOCIOS, (err, results) => {
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
router.get('/single', (req, res) => {
  var stam = req.param('id')
  var clube = req.param('club')
  let sql = `SELECT * FROM socios INNER JOIN socios_clubes ON socios.stam=socios_clubes.stam WHERE socios.stam = ${stam} AND clube = ${clube}`
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
