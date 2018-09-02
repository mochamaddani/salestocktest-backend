const express = require('express');
const bodyParser = require('body-parser');

const dbConfig = require('./src/db/dbConfig');

// Init DB
dbConfig();

// Init Port
const PORT = process.env.PORT || 5000

// Init App
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Route API

app.listen(PORT, function(){
    console.log(`Server started at port: ${PORT}`);
})