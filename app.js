const express = require('express');
const bodyParser = require('body-parser');
const GetProducts = require('./src/controller/GetProducts');
const dbConfig = require('./src/db/dbConfig');

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

app.get('/api/products', GetProducts.All);
app.get('/api/products/:slug', GetProducts.GetBySlug);

app.listen(PORT, function(){
    console.log(`Server started at port: ${PORT}`);
})