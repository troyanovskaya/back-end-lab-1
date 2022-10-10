const express = require('express');
const router = express.Router();
const { createNote} = require('../services/noteService.js');
// // const {authMiddleware}=require('./middleware/authMiddleware.js');


router.post('/me/note', createNote);
// // router.post('/auth/login', loginUser);
// // router.get('/users/me', authMiddleware, getUsersInfo);
// // router.delete('/users/me', authMiddleware, deleteUser);
// // router.patch('/users/me', authMiddleware, changeUsersPassword);

module.exports = {
    noteRouter: router
};