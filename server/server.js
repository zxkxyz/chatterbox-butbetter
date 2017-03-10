const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const MessageRouter = require('./routes/messageRouter.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

// We're gonna mount the router here
app.use('/api', MessageRouter);

app.listen(PORT, () => {
  console.log("Server is up and running on port", PORT);
});
