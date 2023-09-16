import React, { useState } from 'react';
import GameTypes from '../types/gameTypes';
import SelectGameType from './Setup/SelectGametype';

function Setup() {
    const [selectedGameType, setSelectedGameType] = useState<GameTypes>(GameTypes.PITCH_AND_PUTT);

    return (
        <div>
            <SelectGameType
                selectedGameType={selectedGameType}
                setSelectedGameType={setSelectedGameType}
            />
        </div>
    );
}

export default Setup;