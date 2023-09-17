import { TextField } from '@mui/material';
import React from 'react';
import * as constants from '../../utils/constants'

interface PlayerProps {
    playerName: String;
    setPlayerName: React.Dispatch<React.SetStateAction<string>>;
}

function Player({playerName, setPlayerName}: PlayerProps) {

    return (
        <TextField 
            id="player-input"
            label={constants.PLAYER_INPUT_PLACEHOLDER}
            value={playerName}
            variant="outlined"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPlayerName(event.target.value);
            }}
        />
    )
}

export default Player