const express = require('express')
const path = require('path')
const app = express()
const port = 80

//route file
const basic_route = require('./routes/route.js');
const admin_route = require('./routes/route.admin.js');
const customer_route = require('./routes/route.customer.js');

app.set ( "view engine", "ejs" );

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));

//route rule
app.use('/', basic_route);
app.use('/admin', admin_route);
app.use('/customer', customer_route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})