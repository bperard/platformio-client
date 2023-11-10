import { useState, useEffect } from 'react';
// import styles from './Messaging.module.css';
import { socket } from '../../service/socket';
import Input from '../Input/Input';

socket.emit('MESSAGING RENDER');

// function Messaging({
//   users
// }) {
function Messaging() {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // const now = new Date().toISOString();
    // console.log(now.split('T')[0], now.split('T')[1].slice(0, 5));
    // console.log(new Date().toLocaleTimeString());
    // console.log(new Date().toLocaleDateString());
    socket.on('MESSAGE:ADD', (addMessage) => {
      const date = new Date(); // .toDateString();
      // const user = users.filter(user => user.SID === addMessage.SID);
      setMessages(prevMessages => [...prevMessages, { ...addMessage, date }]); // user
    });
    return () => {
      socket.off('MESSAGE:ADD');
    };
  }, []); // users

  function handleSendMessage() {
    if (newMessage !== '') {
      socket.emit('MESSAGE:ADD', newMessage);
      setNewMessage('');
    }
  }

  return (
    <>
      <div>
        {messages.map(message => <div key={message.MID}>
          <p>
            {message.SID}:{message.message} - {message.date.toLocaleTimeString()} {message.date.toLocaleDateString()}
          </p>
        </div>)}
      </div>
      <Input
        name='newMessage'
        // label='Message'
        type='text'
        value={newMessage}
        handleChange={setNewMessage}
        inputButtonToggle
        buttonText='Send Message'
        handleClick={handleSendMessage}
      />
    </>
  );
}

export default Messaging;

// SERVER MESSAGE LISTENERS
// -----
// MESSAGE:ADD(message)
//   on.('MESSAGE:ADD', newMessage)
//     const newMessage = {
//       MID: `${socket.id}${Date.now()}`,
//       SID: socket.id,
//       message,
//     }
// -----
// MESSAGE:DELETE(MID)
//   on.('MESSAGE:DELETE', MID)
// -----
// MESSAGE:REPLY(originMID, message)
//   on.('MESSAGE:REPLY', replyMessage)
//     const replyMessage = {
//       originMID,
//       MID: `${socket.id}${Date.now()}`,
//       SID: socket.id,
//       message,
//     }
// -----
// MESSAGE:REACTION(originMID, reaction)
//   on.('MESSAGE:REACTION', messageReaction)
//     const messageReaction = {
//       originMID,
//       MID: `${socket.id}${Date.now()}`, // can remove if one reaction per originMID
//       SID: socket.id,
//       reaction, // provided by the client, reference library kept in channel, send UID for any reaction to find reaction
//     }
// -----
