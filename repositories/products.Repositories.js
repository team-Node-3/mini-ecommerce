const { where, or } = require('sequelize');
const db = require('../models')


class ProductsRepository {
    createProduct = async (
        name, 
        price, 
        stock, 
        desc, 
        image
    ) => {
        const newProduct = await db.Product.create({
            name,
            price,
            stock,
            desc,
            image
        })
        return newProduct
    }
    editProduct = async (productId, name, price, stock, desc, image) => {
        const editedProduct = await db.Product.update({
            name:name,
            price:price,
            stock:stock,
            desc:desc,
            image:image
        },
        {
        where : {productId:productId}
        })
        return editedProduct
    }
    deleteProduct = async (productId) => {
        const deleteProduct = await db.Product.destroy({ where :{productId:productId}})
        
        return;
    }
}

module.exports = ProductsRepository;