const mongoose = require('mongoose');
const db = require('../index.js');

const Message = mongoose.model('Message', {
  username: String,
  text: String
});

module.exports = Message;
