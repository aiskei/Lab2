import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import { ThemeContext } from './CountriesAppBar'

const FlagButton = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Button
                style={{
                    color: theme.foreground,
                    marginLeft: theme.marginLeft
                }}
            >
                Flags
            </Button>
        </>
    )
}

export default FlagButton
