const ProductRepository = require('../repositories/products.Repositories')



class ProductService {
    productRepository = new ProductRepository();


    listProduct = async () => {
        const productList = await this.productRepository.listProducts()

        return   productList.map(productList => {
            return {
              productId: productList.productId,
              name: productList.name,
              price: productList.price,
              stock: productList.stock,
              desc: productList.desc,
              image: productList.image,
              createdAt: productList.createdAt,
		        updatedAt: productList.updatedAt,
            }
          });
    }

    uploadProduct = async (name, price, stock, desc, image) =>{

        const productData = await this.productRepository.createProduct(name, price, stock, desc, image)

        return {
            status : "200"
        }
        }

    editProduct = async (productId, name, price, stock, desc, image) =>{

        const ProductData = await this.productRepository.editProduct(productId, name, price, stock, desc, image)
        return;
    }

deleteProduct = async (productId) =>{
    const deleteProduct = await this.productRepository.deleteProduct(productId)

    return;
}

    }

module.exports = ProductService;