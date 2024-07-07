import { Link } from 'react-router-dom'
import ListItemText from '@mui/material/ListItemText'
import { ThemeContext } from './CountriesAppBar'
import { useContext } from 'react'

const Navbar = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Link
                to="/"
                style={{
                    color: theme.foreground,
                    marginLeft: theme.marginLeft,
                    textDecoration: theme.textDecoration
                }}
            >
                <ListItemText>HOME</ListItemText>
            </Link>
            <Link
                to="/allcountries"
                style={{
                    color: theme.foreground,
                    marginLeft: theme.marginLeft,
                    textDecoration: theme.textDecoration

                }}
            >
                <ListItemText>All COUNTRIES</ListItemText>
            </Link>
        </>
    )
}

export default Navbar
