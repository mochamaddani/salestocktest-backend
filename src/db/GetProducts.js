const Products = require('./schemes/Products');

const GetProductsModel = {
    All: function(config){
        Products.find({}).skip(config.skip).limit(config.limit).exec(config.callback);
    },
    GetBySlug: function(config){
        Products.find({slug: config.slug}, config.callback);
    },
}

module.exports = GetProductsModel