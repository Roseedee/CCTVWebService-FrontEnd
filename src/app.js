const express = require('express')
const path = require('path')
const app = express()
const port = 80

app.set ( "view engine", "ejs" );

app.use(express.static(path.join(__dirname, 'styles')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, '../static')));

//bootstrap routes
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist')))

app.get('/', (req, res) => {
  res.render(__dirname + "/routes/")
})

app.get('/products', (req, res) => {
  res.render(__dirname + "/routes/products")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})