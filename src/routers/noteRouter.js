const express = require('express');
const router = express.Router();
const { createNote, getCreatedNotes, getNotesByCategory} = require('../services/noteService.js');

router.post('/me/note', createNote);
router.get('/me/notes', getCreatedNotes);
router.get('/me/notes/category/:categoryId', getNotesByCategory);

module.exports = {
    noteRouter: router
};