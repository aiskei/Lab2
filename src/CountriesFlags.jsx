import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { Typography } from '@mui/material'

const CountriesFlags = () => {
    const [data, setData] = useState([])
    const [showAlt, setShowAlt] = useState(false)

    const handleClick = () => {
        // for (let i = 0 ; i < data.length; i++) {
        //     console.log(data[i].flags)
        // }
        setShowAlt(!showAlt)
        console.log(showAlt)
        //console.log('Card is clicked')
    }

    //get data

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data)
                //console.log(data)
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
                        minWidth: 100
                    }}
                    variant="masonry"
                    cols={4}
                    gap={8}
                >
                    {data.map((item, index) => (
                        <>
                            <ImageListItem
                                onClick={() => handleClick()}
                                sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 2,
                                    p: 6,
                                    minWidth: 100
                                }}
                                key={index}
                            >

                                <img src={item.flags.svg} loading="lazy" />
                                        {showAlt === true && (
                                    <Typography
                                    >
                                        {item.flags.alt}
                                    </Typography>
                                )}


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
