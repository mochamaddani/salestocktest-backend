var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
    product_id: Number,
    name: String,
    slug: String,
    price: Number,
    category: String,
    images: Array,
    colors: Array,
    sizes: Array,
})

mongoose.model('Products', ProductSchema);

module.exports = mongoose.model('Products');