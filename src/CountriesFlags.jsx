import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { CardMedia } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { Card } from '@mui/material'
import { Grid } from '@mui/material'

const CountriesFlags = () => {
    const [data, setData] = useState([])

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

    return (
        <Container>
            <>
                <Grid container m={3}>
                    {data.map(function (item, index) {
                        return (
                         <Grid key={index} item xs={12} md={6} lg={4} >
                               <Card sx={{ maxWidth: 345, boxShadow: 1,
                                    borderRadius: 2, m:2}}>

                                <CardMedia
                                    sx={{ height: 140}}
                                    image={item.flags.svg}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {item.name.common}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {`Population: ${item.population}`}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {`Region: ${item.region}`}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {`Capital: ${item.capital}`}
                                    </Typography>
                                </CardContent>
                            </Card>
                         </Grid>
                        )
                    })}
                </Grid>
            </>
        </Container>
    )
}

export default CountriesFlags
