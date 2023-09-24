import React, { useState } from 'react';
import Player from './Player';
import { Box, Typography } from '@mui/material';
import "../../styles/setup.css"

interface AllPlayersProps {
    playerNames: string[]
    setPlayerNames: React.Dispatch<React.SetStateAction<string[]>>;
}

function AllPlayers({playerNames, setPlayerNames}: AllPlayersProps) {
    
    const handlePlayerNameChange = (index: number, newName: React.SetStateAction<string>) => {
        const updatedPlayerNames = [...playerNames];
        updatedPlayerNames[index] = newName as string;
        setPlayerNames(updatedPlayerNames);
    };

    return (
        <div>
            <Typography className="SetupHeader" variant="h4" gutterBottom>
                Enter Player Names
            </Typography>            
            <Box className="AllPlayersBox">
                {playerNames.map((playerName, index) => (
                    <Player
                        key={index}
                        playerName={playerName}
                        setPlayerName={(newName) => handlePlayerNameChange(index, newName)}
                    />
                ))}
            </Box>
        </div>
    );
}

export default AllPlayers;
