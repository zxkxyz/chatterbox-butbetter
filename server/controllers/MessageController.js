const Message = require('../db/models/Message.js');

function getMessages(req, res) {
  Message.find()
    .then(messages => {
      console.log("messages", messages);
      res.send(messages);
    })
    .catch(err => {
      console.error('Error fetching messages from Message model', err);
      res.status(501).send(err);
    });
}

function addNewMessage(req, res) {
  const message = new Message({
    username: req.body.username,
    text: req.body.text
  });
  message.save()
    .then(function() {
      console.log('done');
      res.send(message);
    })
    .catch(err => {
      console.error('Error adding message', err);
      res.status(501).send(err);
    });
}

module.exports.getMessages = getMessages;
module.exports.addNewMessage = addNewMessage;
