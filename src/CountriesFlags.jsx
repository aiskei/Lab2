import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

const CountriesFlags = () => {
    const [data, setData] = useState([]);

    const handleClick = () => {
        console.log('Card is clicked')
     }

    //get data

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data)
                console.log(data)
            })
    }, [])

    return (
        <>
            <Container>
                <ImageList

                    sx={{
                        boxShadow: 1,
                        borderRadius: 2,
                        p: 8,
                        minWidth: 100,
                    }}
                    variant="masonry"
                    cols={4}
                    gap={8}
                >
                    {data.map((item, index) => (
                        <>
                            <ImageListItem
                                sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 2,
                                    p: 6,
                                    minWidth: 100
                                }}
                                key={index}
                            >
                            <img onClick={handleClick} src={(item.flags.svg)} loading="lazy"/>
                            </ImageListItem>
                            <ImageListItemBar
                                subtitle={<span>{item.name.common}</span>}
                                position="below"
                            />
                        </>
                    ))}
                </ImageList>
            </Container>
        </>
    )
}

export default CountriesFlags
