import React, {useState} from 'react';
import Setup from './components/Setup';
import SelectGameType from './components/Setup/Select_Gametype';
import SelectCourse from './components/Setup/Select_Course'
import GameTypes from './types/gameTypes';
import Courses from './types/Courses'
import './App.css';

function App() {

  const [selectedGameType, setSelectedGameType] = useState<GameTypes>(GameTypes.PITCH_AND_PUTT);
  const [selectedCourse, setSelectedCourse] = useState<Courses>(Courses.MOCK_COURSE_1)
  const [playerNames, setPlayerNames] = useState<string[]>(["", "", "", ""]);
  const [isSetupMode, setIsSetupMode] = React.useState(true);

  return (
    <div>
      {isSetupMode ? 
        <Setup
          setIsSetupMode={setIsSetupMode}
          selectedGameType={selectedGameType}
          setSelectedGameType={setSelectedGameType}
          selectedCourse={selectedCourse}
          setSelectedCourse={setSelectedCourse}
          playerNames={playerNames}
          setPlayerNames={setPlayerNames}

        /> : <h1> Game Component not created yet. </h1>}
    </div>
  );
}

export default App;
