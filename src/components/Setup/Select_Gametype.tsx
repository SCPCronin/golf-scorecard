import React, { useState } from 'react';
import { Select, MenuItem, SelectChangeEvent, FormControl, InputLabel } from '@mui/material';
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
        <div>
            <FormControl style={{ marginTop: '50px' }}>
                <InputLabel htmlFor="select-gametype-label">Select a Gametype</InputLabel>
                <Select
                    labelId="select-gametype-label"
                    id="select-gametype"
                    value={selectedGameType}
                    onChange={handleSelectGameTypeChange}
                    style={{ width: '200px', marginTop: '10px' }}
                >
                    {Object.values(GameTypes).map((gameType) => (
                        <MenuItem key={gameType} value={gameType}>
                            {gameType}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectGameType;
