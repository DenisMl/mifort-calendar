const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');

// router.get('/getUserInfo', appController.getUserInfo);
router.post('/getCurrentMonth', appController.getCurrentMonth);

module.exports = router;
