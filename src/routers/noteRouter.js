const express = require('express');
const router = express.Router();
const { createNote, getCreatedNotes} = require('../services/noteService.js');
// // const {authMiddleware}=require('./middleware/authMiddleware.js');


router.post('/me/note', createNote);
// // router.post('/auth/login', loginUser);
router.get('/me/notes', getCreatedNotes);
// // router.delete('/users/me', authMiddleware, deleteUser);
// // router.patch('/users/me', authMiddleware, changeUsersPassword);

module.exports = {
    noteRouter: router
};