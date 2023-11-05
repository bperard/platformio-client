import { useState } from 'react';
import './App.css';
import { socket } from './service/socket';
import styles from './App.module.css';
import Input from './components/Button/Input';

// import { io } from 'socket.io-client';
// const socket = io('http://localhost:3000');

socket.emit('HEY');

function App() {
  const [name, setName] = useState('');
  const [createRoom, setCreateRoom] = useState('');
  const [roomName, setRoomName] = useState('');
  const [roomPassword, setRoomPassword] = useState('');

  const activeOptionHandler = (option) => {
    const toggleChange = createRoom === option ? 'false' : option;
    if (toggleChange) {
      setCreateRoom(option);
    }
    console.log('setCreateRoom', createRoom);
  };

  return (
    <>
      <div>
        <button
          value="join"
          className={createRoom === 'join' ? styles.active : styles.inactive}
          onClick={() => activeOptionHandler('join')}
        >
          Join Room
        </button>
        <button
          value="create"
          className={createRoom === 'create' ? styles.active : styles.inactive}
          onClick={() => activeOptionHandler('create')}
        >
          Create Room
        </button>
      </div>
      <div>
        {createRoom ?
          <>
            <Input
              name='roomName'
              label='Room Name:'
              type='text'
              value={roomName}
              handleChange={setRoomName}
            />
            {/* <label htmlFor="roomName">
              Room Name:
              <input
                name="roomName"
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </label> */}
            <label htmlFor="roomPassword">
              Room Password:
              <input
                name="roomPassword"
                type="text"
                value={roomPassword}
                onChange={(e) => setRoomPassword(e.target.value)}
              />
            </label>
          </>
          : null}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <label
          htmlFor="name"
        >
          Name:
        </label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

// OPTION COMPONENT
// - takes in Array of components
// - each array item renders a selection tab
//  > first item is active if no arg provided
//  > active & inactive styles
// - active item is the rendered component
// - component state has active component name
// - active/inactive className on state
