const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/betterchatterbox');

module.exports = connection;
