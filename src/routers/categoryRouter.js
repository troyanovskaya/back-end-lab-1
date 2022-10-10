const express = require('express');
const router = express.Router();
const { createCategory, getCategoryList} = require('../services/categoryService.js');


router.post('/me/category', createCategory);
router.get('/me/category', getCategoryList);

module.exports = {
    categoryRouter: router
};