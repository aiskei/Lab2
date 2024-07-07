import React, { createContext } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Navbar from './NavBar'
import FlagButton from './FlagButton'
import Continents from './Continents'

export const ThemeContext = createContext()

const CountriesAppBar = () => {
    const theme = {
        foreground: '#FFFFFF',
        background: '#eeeeee',
        primaryColor: '#4285f4',
        secondaryColor: '#34a853',
        tertiaryColor: '#fbbc05',
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        marginLeft: '70px',
        textDecoration: 'none'
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    ></IconButton>

                    <ThemeContext.Provider value={{ theme }}>
                        <Navbar />
                    </ThemeContext.Provider>
                    <ThemeContext.Provider value={{ theme }}>
                        <Continents />
                    </ThemeContext.Provider>

                    <ThemeContext.Provider value={{ theme }}>
                        <FlagButton />
                    </ThemeContext.Provider>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default CountriesAppBar
