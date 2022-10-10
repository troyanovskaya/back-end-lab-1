const express = require('express');
const router = express.Router();
const { registerUser} = require('../services/userService.js');
// const {authMiddleware}=require('./middleware/authMiddleware.js');


router.post('/auth/register', registerUser);

module.exports = {
    userRouter: router
};