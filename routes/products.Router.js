const express = require("express");
const ProductsController = require("../controller/products.Controller");
const router = express.Router();

const productsController = new ProductsController();

router.get("/", (req,res) => {
    return res.render('admin')
})

router.post("/product", productsController.uploadProduct)

router.patch("/product/edit", productsController.editProduct)

router.delete("/product/delete", productsController.deleteProduct)
module.exports = router;