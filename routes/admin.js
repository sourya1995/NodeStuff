const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../util/path');

const products = []; 

router.use('/add-product',(req, res, next) => {
    console.log('inside another middleware');
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true});
});

router.post('/add-product', (req, res) => {
    products.push({title: req.body.title});
    res.redirect('/');
});


exports.routes = router;
exports.products = products;