const express = require('express')
const path = require('path')
const app = express()
const port = 80

app.set ( "view engine", "ejs" );

app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, '../static')));

app.get('/', (req, res) => {
  res.render(__dirname + "/routes/")
})

app.get('/products', (req, res) => {
  res.render(__dirname + "/routes/products")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})