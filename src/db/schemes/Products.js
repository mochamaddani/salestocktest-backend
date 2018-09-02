var mongoose = require('mongoose');
var ProductSchema = new mongoose.Schema({
        product_id: Number,
        name: String,
        slug: String,
        price: Number,
        category: String,
        images: Array,
        colors: Array,
        sizes: Array
})

mongoose.model('Product', ProductSchema);

module.exports = mongoose.model('Product');