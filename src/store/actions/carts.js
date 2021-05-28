

export const Increment = () =>{
    return dispatch =>{
        dispatch({ type: 'INCREMENT' });
    }
}


export const Decrement = () =>{
    return dispatch => {
        dispatch({type: 'DECREMENT'})
    }
}