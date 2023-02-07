const express = require('express');
const router = express.Router();


const authMiddleware = require('../middleware/auth');
const MypageController = require('../controllers/mypage_controller');
const mypageController = new MypageController();

router.get('/', authMiddleware, mypageController.showMypage);
router.patch('/', authMiddleware, mypageController.updateMypage);
router.delete('/', authMiddleware, mypageController.deleteMypage);


module.exports = router;

