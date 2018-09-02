const mongoose = require('mongoose');
require('dotenv').config();

var dbconfig = function(){
    mongoose.connect(process.env.MONGODB_URL);
}

module.exports = dbconfig;