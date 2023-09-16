import React from 'react';
import Setup from './components/Setup';
import './App.css';

function App() {

  const [isGameRunning, setIsGameRunning] = React.useState(false)

  return (
    <div>
      {!isGameRunning ? <Setup/> : <h1> Game Component not created yet. </h1>}
    </div>
  );
}

export default App;
