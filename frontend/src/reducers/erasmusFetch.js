const initialState = {
    listFetched: false,
    listFetching: false,
    listFetchError: null
}

const fetchErasmusList = state => ({
    ...state,
    listFetching: true
})

const receiveErasmusList = state => ({
    ...state,
    listFetching: false,
    listFetched: true
})

const erasmusFetch = (state=initialState, action) => {
    switch (action.type) {
        case "FETCH_ERASMUSLIST": return fetchErasmusList(state)
        case "RECEIVE_ERASMUSLIST": return receiveErasmusList(state)
        default: return state
    }
}

export default erasmusFetch;
