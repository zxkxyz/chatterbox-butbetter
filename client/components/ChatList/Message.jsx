import React from 'react';

const Message = ({ message }) => {
  return (
    <div>
      <strong>{message.username}</strong>: {message.text}
    </div>
  )
}

export default Message;


