const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth.controller')
const authController = new AuthController();
const authMiddleware = require('../middleware/auth')

router.post("/signup", authController.signup);

router.post("/login", authController.login);

router.get("logout", authController.logout);

// 토큰검증용 api

router.get("/me", authMiddleware, async (req, res) => {
  res.json({ msg: "passed!"})
})

module.exports = router;