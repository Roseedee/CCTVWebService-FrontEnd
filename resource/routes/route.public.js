const express = require('express');
const route = express.Router();
const path = require('path');

const index = path.join(__dirname, '/../views');
const products = path.join(index, '/products');

route.get('/', (req, res) => {
    res.render(index)
})

route.get('/products', (req, res) => {
    res.render(products)
})

module.exports = route;