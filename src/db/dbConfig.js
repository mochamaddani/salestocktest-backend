const mongoose = require('mongoose');
require('dotenv').config();

var dbconfig = function(){
    mongoose.connect(process.env.DB_URL);
}

module.exports = dbconfig;