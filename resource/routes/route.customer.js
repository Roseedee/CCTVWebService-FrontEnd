const express = require('express');
const route = express.Router();
const path = require('path');

const view_path = path.join(__dirname, '/../views', 'customer');

route.get('/', (req, res) => {
    res.render(view_path)
})

module.exports = route;