const express = require("express");
const ProductsController = require("../controllers/products.Controller");
const ListController = require("../controllers/list.controller")
const router = express.Router();
const multer = require("multer");

const productsController = new ProductsController();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "assets/uploads/"); // 파일 경로 설정
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now());
    }, //필드네임인 img와 현재 시각을 파일 이름으로 설정했다
  });

const upload = multer({ storage:storage });


router.get("/", (req,res) => {
    return res.render('admin-product-manage')
})


router.get("/product/list", productsController.listProduct)

router.post("/product/add", upload.single("image"), productsController.uploadProduct)

router.patch("/product/edit", productsController.editProduct)

router.delete("/product/delete", productsController.deleteProduct)

router.get("/order", (req,res) => {
  return res.render('admin-order-manage')
})

module.exports = router;