const express = require('express')
const path = require('path')
const app = express()
const port = 80

app.set ( "view engine", "ejs" );

//import route file
const public_route = require('./routes/route.public.js');
const admin_route = require('./routes/route.admin.js');
const customer_route = require('./routes/route.customer.js');

//static route file
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));

//route rule
app.use('/', public_route);
app.use('/admin', admin_route);
app.use('/customer', customer_route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})