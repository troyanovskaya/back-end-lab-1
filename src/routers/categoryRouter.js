const express = require('express');
const router = express.Router();
const { createCategory} = require('../services/categoryService.js');
// // const {authMiddleware}=require('./middleware/authMiddleware.js');


router.post('/me/category', createCategory);
// // router.post('/auth/login', loginUser);
// // router.get('/users/me', authMiddleware, getUsersInfo);
// // router.delete('/users/me', authMiddleware, deleteUser);
// // router.patch('/users/me', authMiddleware, changeUsersPassword);

module.exports = {
    categoryRouter: router
};