//import axios from 'axios'

export const addErasmus = erasmus => ({
    type: "ADD_ERASMUS",
    erasmus
})

export const receiveErasmusList = erasmusList => ({
    type: "RECEIVE_ERASMUSLIST",
    erasmusList
})

export const setNameFilter = filter => ({
  type: 'SET_NAME_FILTER',
  filter
})

export const fetchErasmusList = dispatch => {
    dispatch({type:"FETCH_ERASMUSLIST"})

    return fetch("http://localhost:8080/api/erasmus")
    .then(response => response.json())
    .then(json => dispatch(receiveErasmusList(json)))
    /*
    return axios.get("http://localhost:8080/api/erasmus").then(
        response => dispatch(receiveErasmusList(response.data))
    )*/
}

export const fetchErasmusListIfNeeded = (dispatch, getState) => {
    const { listFetched, listFetching } = getState().erasmusFetch
     if (!listFetched && !listFetching) {
         return fetchErasmusList(dispatch)
     }
}
