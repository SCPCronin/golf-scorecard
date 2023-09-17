import React, { useState } from 'react';
import GameTypes from '../types/gameTypes';
import SelectGameType from './Setup/Select_Gametype';
import SelectCourse from './Setup/Select_Course'
import COURSES from '../types/Courses';
import AllPlayers from './Setup/AllPlayers';

function Setup() {
    const [selectedGameType, setSelectedGameType] = useState<GameTypes>(GameTypes.PITCH_AND_PUTT);
    const [selectedCourse, setSelectedCourse] = useState<COURSES>(COURSES.MOCK_COURSE_1)

    return (
        <div>
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
            <AllPlayers />
        </div>
    );
}

export default Setup;