const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');

router.post('/getCurrentMonth', appController.getCurrentMonth);
router.post('/addEvent', appController.addEvent);

module.exports = router;
