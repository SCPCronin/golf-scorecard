import { Box, Button } from '@mui/material'
import React from 'react'

interface ButtonsProps {
    resetState: () => void;
    startGame: () => void;
}

function Buttons ({resetState, startGame}: ButtonsProps) {

    return (
        <Box display="flex" justifyContent="space-between" style={{marginTop: "5%"}}>
            <Button id="ResetButton" variant="contained" onClick={resetState} style={{marginLeft: "15%"}}> Clear State </Button>
            <Button id="StartGameButton" variant="contained" onClick={startGame} style={{marginRight: "15%"}}> Start Game </Button>
        </Box>
    )

}

export default Buttons