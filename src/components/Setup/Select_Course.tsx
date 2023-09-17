import React, { useState } from 'react';
import { Select, MenuItem, SelectChangeEvent, FormControl, InputLabel } from '@mui/material';
import COURSE_NAMES from '../../types/Courses';

interface SelectCourseProps {
    selectedCourse: COURSE_NAMES
    setSelectedCourse: React.Dispatch<React.SetStateAction<COURSE_NAMES>>;
}

function SelectCourse({ selectedCourse, setSelectedCourse }: SelectCourseProps) {

    const handleSelectCourseChange = (event: SelectChangeEvent<COURSE_NAMES>) => {
        setSelectedCourse(event.target.value as COURSE_NAMES);
    };

    return (
        <div>
            <FormControl style={{ marginTop: '50px' }}>
                <InputLabel htmlFor="select-course-label">Select a Course</InputLabel>
                <Select
                    labelId="select-course-label"
                    id="select-course"
                    value={selectedCourse}
                    onChange={handleSelectCourseChange}
                    style={{ width: '200px', marginTop: '10px' }}
                >
                    {Object.values(COURSE_NAMES).map((course) => (
                        <MenuItem value={course}>
                            {course}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectCourse;
