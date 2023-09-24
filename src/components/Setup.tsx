import React from 'react';
import { Box } from '@mui/material';
import GameTypes from '../types/gameTypes';
import Courses from '../types/Courses';
import SelectCourse from './Setup/Select_Course'
import SelectGameType from './Setup/Select_Gametype';
import AllPlayers from './Setup/AllPlayers';
import Buttons from './Setup/Buttons'
import '../styles/setup.css';

interface SetupProps {
    setIsSetupMode: React.Dispatch<React.SetStateAction<boolean>>;
    selectedGameType: GameTypes;
    setSelectedGameType: React.Dispatch<React.SetStateAction<GameTypes>>;
    selectedCourse: Courses;
    setSelectedCourse: React.Dispatch<React.SetStateAction<Courses>>;
    playerNames: string[]
    setPlayerNames: React.Dispatch<React.SetStateAction<string[]>>;
}

function Setup({
    setIsSetupMode,
    selectedGameType,
    setSelectedGameType,
    selectedCourse,
    setSelectedCourse,
    playerNames,
    setPlayerNames
}: SetupProps) {
    
    const resetState = () => {
        setSelectedGameType(GameTypes.PITCH_AND_PUTT);
        setSelectedCourse(Courses.MOCK_COURSE_1)
        setPlayerNames(["", "", "", ""])
    }

    const startGame = () => {
        setIsSetupMode(false);
    }

    return (
        <div className="Test">
            <Box className="SetupBox">
                <SelectGameType
                    selectedGameType={selectedGameType}
                    setSelectedGameType={setSelectedGameType}
                    />
                {selectedGameType === GameTypes.GOLF && (// For now, only show courses if the game type selected is Golf
                    <SelectCourse
                        selectedCourse={selectedCourse}
                        setSelectedCourse={setSelectedCourse}
                    />
                )}
                <AllPlayers playerNames={playerNames} setPlayerNames={setPlayerNames}/>
                <Buttons resetState={resetState} startGame={startGame} /> 
            </Box>
        </div>
    );
}

export default Setup;