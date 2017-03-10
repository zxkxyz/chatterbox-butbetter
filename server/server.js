const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

app.get('/api/test', function(req, res, next) {
  res.send("What the heck is up");
});

app.listen(PORT, () => {
  console.log("Server is up and running on port", PORT);
});
