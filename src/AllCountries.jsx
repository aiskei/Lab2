import React, { useEffect, useReducer } from "react";
import axios from "axios";


const myReducer = (state, action) => {
    switch (action.type) {
      case "fetching":
        return {
          loading: true,
          data: [],
          error: false,
        };
      case "success":
        return {
          loading: false,
          data: action.payload,
          error: false,
        };
      case "error":
        return {
          loading: false,
          data: [],
          error: true,
        };
    }
  };
  const ACTION = {
      FETCHING: 'fetching',
      SUCCESS: 'success',
      ERROR: 'error'
  }


const Test = () => {
     // FETCHING THE DATA USING A USEEFFECT HOOK
     useEffect(() => {
        const fetchData = async () => {
          dispatch({type: ACTION.FETCHING})
          try {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            dispatch({type: ACTION.SUCCESS, payload: response.data});

          } catch (err) {
            // console.error(err);
            dispatch({type: ACTION.ERROR});
          }
        };
        fetchData();
      }, []);

  const [state, dispatch] = useReducer(myReducer, {
    data: [],
    loading: false,
    error: false,
  });

    return (
        <>
            <div>Welcome to test page</div>
            <div>
      {state.loading ?
        <p>Loading...</p>
       :

        state.data.map((item => (
          <p key={item.name}>{item.name.common}</p>
        )))

      }
      {state.error && <p>Something went wrong</p>}
    </div>
        </>
    )
}

export default Test
