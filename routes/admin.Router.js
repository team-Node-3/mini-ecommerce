const express = require("express");
const ProductsController = require("../controllers/products.Controller");
const OrdersController = require("../controllers/orders.controller")
const ListController = require("../controllers/list.controller")
const router = express.Router();
const multer = require("multer");
const authMiddleware = require('../middleware/auth');

// admin user
const UserlistController = require("../controllers/admin-user.controller");
const userlistController = new UserlistController();

const productsController = new ProductsController();
const ordersController = new OrdersController();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "assets/uploads/"); // 파일 경로 설정
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now());
    }, //필드네임인 img와 현재 시각을 파일 이름으로 설정했다
  });

const upload = multer({ storage:storage });



// 회원 목록 전체 조회
router.get('/user', authMiddleware, (req, res) => {
  const user = res.locals.user;
  res.render('admin-user', {user:user});
})


router.get("/product", authMiddleware, productsController.showAdminpage)


router.get("/product/list", productsController.listProduct)

router.post("/product/add", upload.single("image"), productsController.uploadProduct)

router.post("/product/edit", upload.single("image"), productsController.editProduct)

router.delete("/product/delete", productsController.deleteProduct)

// 회원 목록 조회 삭제 router
router.get('/users', authMiddleware, userlistController.showUser);
router.delete('/users/:userId', authMiddleware, userlistController.deleteUser);

router.get("/order", (req,res) => {
  return res.render('admin-order-manage')
})

router.get("/order/list", ordersController.listOrder)

router.delete("/order/delete", ordersController.deleteOrder)


module.exports = router;