import { useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:3000');

socket.emit('HEY');

function App() {
  const [name, setName] = useState('');
  const [createRoom, setCreateRoom] = useState('join');
  const [roomName, setRoomName] = useState('');
  const [roomPassword, setRoomPassword] = useState('');

  const activeOptionHandler = (option) => {
    const toggleChange = createRoom === option ? 'false' : option;
    if (toggleChange) {
      setCreateRoom(option);
    }
    console.log(createRoom);
  };

  return (
    <>
      <div>
        <button
          value="join"
          className="join"
          onClick={() => activeOptionHandler('join')}
        >
          Join Room
        </button>
        <button
          value="join"
          className={(createRoom) => (createRoom === this.value ? 'active' : 'inactive')}
          onClick={() => activeOptionHandler('create')}
        >
          Create Room
        </button>
      </div>
      <div>
        {createRoom ? <>
          <input
            type="text"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
          />
          <input
            type="text"
            value={roomPassword}
            onChange={(e) => setRoomPassword(e.target.value)}
          />
        </>
          : <>

          </>}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => socket.emit('USER_NAME', name)}>
          count is {name}
        </button>
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
