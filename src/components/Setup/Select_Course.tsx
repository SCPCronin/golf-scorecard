import React from 'react';
import { Select, MenuItem, SelectChangeEvent, FormControl, Typography, Box } from '@mui/material';
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
        <Box className="SelectCourseBox">
            <Typography className="SetupHeader" variant="h4" gutterBottom>
                Select Course
            </Typography>
            <FormControl>
                <Select
                    labelId="select-course-label"
                    id="select-course"
                    value={selectedCourse}
                    onChange={handleSelectCourseChange}                >
                    {Object.values(COURSE_NAMES).map((course) => (
                        <MenuItem value={course}>
                            {course}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectCourse;
