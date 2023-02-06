const ProductRepository = require('../repositories/products.Repositories')



class ProductService {
    productRepository = new ProductRepository();

    uploadProduct = async (name, price, stock, desc, image) =>{

        const productData = await this.productRepository.createProduct(name, price, stock, desc, image)

        return {
            status : "200"
        }
        }

    editProduct = async (productId, name, price, stock, desc, image) =>{

        const ProductData = await this.productRepository.editProduct(name, price, stock, desc, image)
        return;
    }

deleteProduct = async (productId) =>{
    const deleteProduct = await this.productRepository.deleteProduct(productId)

    return;
}

    }

module.exports = ProductService;