import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from './CountriesAppBar'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

const Continents = () => {
    const [data, setData] = useState([]);

    const { theme } = useContext(ThemeContext)

    //fetch data using useEffect hook
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data)
            })
    }, [])

    const [anchorEl, setAnchorEl] = React.useState(null)
    const [selectedIndex, setSelectedIndex] = useState([])
    const open = Boolean(anchorEl)

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index)
        setAnchorEl(null)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
        <div>
                <List
                    component="nav"
                >
                    <ListItemButton
                         style={{
                            color: theme.foreground,
                            marginLeft: theme.marginLeft
                        }}

                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label=""
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                    >
                        <ListItemText
                            secondary={data[selectedIndex]}
                        > ALL CONTINENTS</ListItemText>
                    </ListItemButton>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox'
                    }}
                >
                    {data.map((item, index) => (
                        <MenuItem
                            key={item}
                            onClick={(event) =>
                                handleMenuItemClick(event, index)
                            }
                        >
                            {item.continents}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </>
    )
}

export default Continents
