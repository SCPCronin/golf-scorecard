import React, { useState } from 'react';
import GameTypes from '../types/gameTypes';
import SelectGameType from './Setup/SelectGametype';
import SelectCourse from './Setup/SelectCourse'
import COURSES from '../types/Courses';

function Setup() {
    const [selectedGameType, setSelectedGameType] = useState<GameTypes>(GameTypes.PITCH_AND_PUTT);
    const [selectedCourse, setSelectedCourse] = useState<COURSES>(COURSES.MOCK_COURSE_1)

    return (
        <div>
            <SelectGameType
                selectedGameType={selectedGameType}
                setSelectedGameType={setSelectedGameType}
            />
            {selectedGameType === GameTypes.GOLF &&
                <SelectCourse
                    selectedCourse={selectedCourse}
                    setSelectedCourse={setSelectedCourse}
                />
            }
        </div>
    );
}

export default Setup;