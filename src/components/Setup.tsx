import React, { useState } from 'react';
import GameTypes from '../types/gameTypes';
import SelectGameType from './Setup/Select_Gametype';
import SelectCourse from './Setup/Select_Course'
import Courses from '../types/Courses';
import AllPlayers from './Setup/AllPlayers';
import { Box, Button, Typography } from '@mui/material';
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

function Setup({setIsSetupMode, selectedGameType, setSelectedGameType, selectedCourse, setSelectedCourse, playerNames, setPlayerNames}: SetupProps) {
    
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
                {selectedGameType === GameTypes.GOLF && // For now, only show courses if the game type selected is Golf
                    <SelectCourse
                        selectedCourse={selectedCourse}
                        setSelectedCourse={setSelectedCourse}
                    />
                }
                <AllPlayers playerNames={playerNames} setPlayerNames={setPlayerNames}/>
                <Box>
                    <Button id="ResetButton" variant="contained" onClick={resetState}> Clear State </Button>
                    <Button id="StartGameButton" variant="contained" onClick={startGame}> Start Game </Button>
                </Box>
            </Box>
        </div>
    );
}

export default Setup;