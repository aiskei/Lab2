import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import { ThemeContext } from './CountriesAppBar'

const FlagButton = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Button
                style={{
                    backgroundColor: theme.background,
                    color: theme.foreground
                }}
            >
                Flags
            </Button>
        </>
    )
}

export default FlagButton
