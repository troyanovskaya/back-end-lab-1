const express = require('express');
const router = express.Router();
const { registerUser} = require('../services/userService.js');
// const {authMiddleware}=require('./middleware/authMiddleware.js');


router.post('/auth/register', registerUser);
// router.post('/auth/login', loginUser);
// router.get('/users/me', authMiddleware, getUsersInfo);
// router.delete('/users/me', authMiddleware, deleteUser);
// router.patch('/users/me', authMiddleware, changeUsersPassword);

module.exports = {
    userRouter: router
};