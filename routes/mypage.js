const express = require('express');
const router = express.Router();
const User = require('../models/user');

const { userUpdateValidation } = require('../validations');

// 마이페이지 조회
router.get('/', async (req, res) => {
  const { currentUser } = res.locals;
  res.send(currentUser);
})

// 마이페이지 수정
router.patch('/', async (req, res) => {
  const fieldsToBeUpdated = await userUpdateValidation.validateAsync(req.body);
  try {
    const modifyUser = await User.update(fieldsToBeUpdated);
    res.json(modifyUser)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }



})

// 마이페이지 삭제





module.exports = router;

