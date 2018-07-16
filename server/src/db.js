const mysql = require('mysql')

// Create connection
const connection = mysql.createConnection({
  host: 'fop.com.pt',
  user: 'rsacramento',
  password: 'Sacramento1991',
  database: 'fop_aplicacao'
})

connection.connect((err) => {
  if (err) { throw err }
  console.log('Mysql Connected')
})

module.exports = connection
