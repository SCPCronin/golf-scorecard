import React, { useState } from 'react';
import { Select, MenuItem, SelectChangeEvent, FormControl, Typography, Box } from '@mui/material';
import GameTypes from '../../types/gameTypes';

interface SelectGameTypeProps {
    selectedGameType: GameTypes;
    setSelectedGameType: React.Dispatch<React.SetStateAction<GameTypes>>;
}

function SelectGameType({ selectedGameType, setSelectedGameType }: SelectGameTypeProps) {

  const handleSelectGameTypeChange = (event: SelectChangeEvent<GameTypes>) => {
    setSelectedGameType(event.target.value as GameTypes);
    };

    return (
        <Box className="SelectGameTypeBox">
            <Typography className="SetupHeader" variant="h4" gutterBottom>
                Select Game
            </Typography>
            <FormControl>
                <Select
                    labelId="select-gametype-label"
                    id="select-gametype"
                    value={selectedGameType}
                    onChange={handleSelectGameTypeChange}
                    >
                    {Object.values(GameTypes).map((gameType) => (
                        <MenuItem key={gameType} value={gameType}>
                            {gameType}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectGameType;
