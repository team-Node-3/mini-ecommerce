const { body } = require('express-validator')
const validate = require('../middleware/validateSignup')

const express = require('express');
const router = express.Router();

const AuthController = require('../controllers/auth.controller')
const authController = new AuthController();
const authMiddleware = require('../middleware/auth')

const validateCredential = [
  body('email')
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage('Please enter valid email address'),
  body('pw')
    .trim()
    .isLength({ min: 3 }, { max: 20 })
    .withMessage('password should be at least 3 characters'),
  body('admin')
    .notEmpty(),
  validate,
];

router.post("/signup", validateCredential, authController.signup);

router.post("/login", authController.login);

router.get("logout", authController.logout);

// 토큰검증용 api

router.get("/me", authMiddleware, async (req, res) => {
  res.json({ msg: "passed!"})
})

module.exports = router;