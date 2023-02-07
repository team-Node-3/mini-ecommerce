const productsService = require('../services/products.Service');

// User의 컨트롤러(Controller)역할을 하는 클래스
class ProductsController {
    productsService = new productsService();

    listProduct = async (req,res) =>
    {
        const productList = await this.productsService.listProduct()
        return res.status(200).json({ data: productList });
    }

    uploadProduct = async (req, res) => {
        try {
            const { name, price, stock, desc} = req.body;
            const image = req.file.path.substring(7)
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
            const {productId, name, price, stock, desc,} = req.body;
            const image =req.file.path.substring(7)
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
    
    showAdminpage = async (req,res) => {
        try {
            const admin = res.locals.user.admin
            if(admin != 1){
                return res.status(401).send({message : "관리자만 이용 가능합니다"})
            }
            else{
                return res.render("admin-product-manage")
            }
            
        }
        catch (err){
            console.log(err)
            res.status(400).send({errorMessage : "상품 삭제 실패"})
        }
    }
    

    
}

module.exports = ProductsController;
