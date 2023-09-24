import { Box, Button } from '@mui/material'
import "../../styles/setup.css"

interface ButtonsProps {
    resetState: () => void;
    startGame: () => void;
}

function Buttons ({resetState, startGame}: ButtonsProps) {

    return (
        <Box id="ButtonsBox">
            <Button id="ResetButton" variant="contained" onClick={resetState}> Clear State </Button>
            <Button id="StartGameButton" variant="contained" onClick={startGame}> Start Game </Button>
        </Box>
    )

}

export default Buttons