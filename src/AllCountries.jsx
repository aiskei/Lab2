import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import Container from '@mui/material/ListItemText'

//case -useReducer hook
const myReducer = (state, action) => {
    switch (action.type) {
        case 'fetching':
            return {
                loading: true,
                data: [],
                error: false
            }
        case 'success':
            return {
                loading: false,
                data: action.payload,
                error: false
            }
        case 'error':
            return {
                loading: false,
                data: [],
                error: true
            }
    }
}
const ACTION = {
    FETCHING: 'fetching',
    SUCCESS: 'success',
    ERROR: 'error'
}

const Test = () => {
    // fetching data with useEffect
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: ACTION.FETCHING })
            try {
                const response = await axios.get(
                    'https://restcountries.com/v3.1/all'
                )
                dispatch({ type: ACTION.SUCCESS, payload: response.data })
            } catch (err) {
                // console.error(err);
                dispatch({ type: ACTION.ERROR })
            }
        }
        fetchData()
    }, [])

    const [state, dispatch] = useReducer(myReducer, {
        data: [],
        loading: false,
        error: false
    })

    return (
        <>
            <Container>
                {state.loading ? (
                    <p>Loading...</p>
                ) : (
                    state.data.map((item, index) => (
                        <p key={index}>
                            {' '}
                            {index}: {item.name.common}
                        </p>
                    ))
                )}
                {state.error && <p>Something went wrong</p>}
            </Container>
        </>
    )
}

export default Test
