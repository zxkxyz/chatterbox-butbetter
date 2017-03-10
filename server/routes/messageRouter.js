const express = require('express');
const MessageController = require('../controllers/MessageController.js');
const router = express.Router();

router.get('/message', MessageController.getMessages);

router.post('/message', MessageController.addNewMessage);

module.exports = router;
