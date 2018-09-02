const GetProductsModel = require('../db/GetProducts');

const GetProducts = {
    All: function(req, res){
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.perPage) || 2
        const skip = (page - 1) * limit
        const config = {
            limit: limit,
            skip: skip,
            callback: function(err, product){
                res.send({
                    message: 'Success',
                    data: product,
                    page: page,
                    perPage: limit,
                });
            }
        }
        GetProductsModel.All(config);
    },
    GetBySlug: function(req, res){
        const config = {
            slug: req.params.slug,
            callback: function(err, product){
                res.send({
                    message: 'Success',
                    data: product,
                });
            }
        }
        GetProductsModel.GetBySlug(config);
    }
}

module.exports = GetProducts;