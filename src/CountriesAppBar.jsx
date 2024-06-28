import React, { createContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import FlagButton from './FlagButton'
export const ThemeContext = createContext()

const CountriesAppBar = () => {
    const theme = {
        foreground: '#F08',
        background: '#eeeeee',
        primaryColor: '#4285f4',
        secondaryColor: '#34a853',
        tertiaryColor: '#fbbc05',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px'
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    ></IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Countries
                    </Typography>

                    <ThemeContext.Provider value={{ theme }}>
                        <FlagButton />
                    </ThemeContext.Provider>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default CountriesAppBar
