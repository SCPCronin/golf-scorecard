import React, { useState } from 'react';
import Player from './Player';
import { Box } from '@mui/material';

function AllPlayers() {
    
    const [playerNames, setPlayerNames] = useState<string[]>(["", "", "", ""]);
    
    const handlePlayerNameChange = (index: number, newName: React.SetStateAction<string>) => {
        const updatedPlayerNames = [...playerNames];
        updatedPlayerNames[index] = newName as string;
        setPlayerNames(updatedPlayerNames);
    };

    return (
        <div>
            <Box style={{width: "25%"}}>
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
