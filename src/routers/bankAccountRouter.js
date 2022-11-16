const express = require('express');
const router = express.Router();
const { pushMoney, getCurrentBalance } = require('../services/bankAccountService.js');


router.post('/me/bank', pushMoney);
router.get('/me/bank/balance', getCurrentBalance);

module.exports = {
    bankAccountRouter: router
};