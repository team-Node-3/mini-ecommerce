const productsService = require('../services/products.Service');

// User의 컨트롤러(Controller)역할을 하는 클래스
class ProductsController {
    productsService = new productsService();

    uploadProduct = async (req, res) => {
        try {
            const { name, price, stock, desc, image } = req.body;
            const uploadProduct = await this.productsService.uploadProduct(
                name,
                price,
                stock,
                desc,
                image
            );
            return res.status(200).send({ message: '상품 등록 성공!' });
        } catch (err) {
            console.log(err);
            res.status(400).json({ errorMessage: '상품 등록 실패' });
        }
    };

    editProduct = async (req, res) => {
        try {
            const {productId, name, price, stock, desc, image } = req.body;
            const editProduct = await this.productsService.editProduct(
                productId,
                name,
                price,
                stock,
                desc,
                image
            );
            return res.status(200).send({ message: '상품 수정 성공!' });
        } catch (err) {
            console.log(err);
            res.status(400).json({ errorMessage: '상품 수정 실패' });
        }
    };

    deleteProduct = async (req,res) => {
        try {
            const {productId} =req.body
            const deleteProduct = await this.productsService.deleteProduct(productId)
            return res.status(200).send({ message : '상품 삭제 성공!'})
        }
        catch (err){
            console.log(err)
            res.status(400).send({errorMessage : "상품 삭제 실패"})
        }
    }

    
}

module.exports = ProductsController;
