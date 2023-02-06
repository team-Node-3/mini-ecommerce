const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { Orders } = require('../models');


const ListController = require("../controllers/list.controller");
const listController = new ListController();
router.get("/", listController.getList);
// 미들웨어추가해야함
// router.put("/:productId", authMiddleware,listController.)
router.put("/api/:productId/orders",  async (req, res) => {
    const { userId } = res.locals.user;
    const { productId } = req.params;
    const { amount } = req.body;
  
    const existsCart = await Orders.findOne({
        userId,
        productId,
        amount
      }).exec();
    console.log(existsCart, amount);
//     if (existsCart) {
//         existsCart != null;
//         alert(이미);
//       } else {
//         const orders = new Orders({
//           userId,
//           goodsId,
//           quantity,
//         });
//         await orders.save();
//       }
//     res.send({ result: "success" });
//   });
  if (existsCart.length) {
    await Orders.updateOne({ productId }, { $set: { amount } +1 });
  } else {
    await Orders.create({ productId: productId, amount: 1, userId:userId });
  }
  res.send({ result: "success" });
});

const upload = multer({
    storage: multer.diskStorage({
      // set a localstorage destination
      destination: (req, file, cb) => {
        cb(null, "upload");
      },
      // convert a file name
      filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
      },
    }),
  });

router.post("/",upload.single("image"));

module.exports = router;