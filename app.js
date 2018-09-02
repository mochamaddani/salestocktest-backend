const express = require('express');
const bodyParser = require('body-parser');

const dbConfig = require('./src/db/dbConfig');
const Products = require('./src/db/schemes/Products');

// Init DB
dbConfig();

// Init Port
const PORT = process.env.PORT || 5000

// Init App
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// Route API

app.get('/api/products', function(req, res){
    const page = parseInt(req.query.page) || 1
	const limit = parseInt(req.query.perPage) || 2
	const skip = (page - 1) * limit

    Products.find({}).skip(skip).limit(limit).exec(function(err, product){
        res.send({
            message: 'Success',
            data: product,
            page: page,
            perPage: limit,
        });
    })
})

app.get('/api/products/:slug', function(req, res){
    Products.find({slug: req.params.slug}, function(err, product){
        res.send({
            message: 'Success',
            data: product
        });
    })
})

app.listen(PORT, function(){
    console.log(`Server started at port: ${PORT}`);
})