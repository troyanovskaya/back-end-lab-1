const express = require('express');
const router = express.Router();
const { createNote, getCreatedNotes, getNotesByCategory} = require('../services/noteService.js');
const { pushMoneyForNote } = require('../services/bankAccountService.js')
router.post('/me/note', pushMoneyForNote, createNote);
router.get('/me/notes', getCreatedNotes);
router.get('/me/notes/category/:categoryId', getNotesByCategory);

module.exports = {
    noteRouter: router
};