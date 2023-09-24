import React, {useState} from 'react';
import Setup from './components/Setup';
import GameTypes from './types/gameTypes';
import Courses from './types/Courses'
import './App.css';

function App() {

  const [selectedGameType, setSelectedGameType] = useState(GameTypes.PITCH_AND_PUTT);
  const [selectedCourse, setSelectedCourse] = useState(Courses.MOCK_COURSE_1)
  const [playerNames, setPlayerNames] = useState(["", "", "", ""]);
  const [isSetupMode, setIsSetupMode] = React.useState(true);

  return (
    <>
      {isSetupMode ? (
        <Setup
          setIsSetupMode={setIsSetupMode}
          selectedGameType={selectedGameType}
          setSelectedGameType={setSelectedGameType}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          playerNames={playerNames}
          setPlayerNames={setPlayerNames}
        /> ) : ( 
        <>
          <h1> Game Component not created yet. </h1>
          <p> Selected Game type: {selectedGameType}</p>
          <p> Selected Course {selectedCourse} </p>
          <p> Player Names: {playerNames}</p>
        </>
        )}
    </>
  );
}

export default App;
