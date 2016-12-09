const erasmusList = (state=[], action) => {
    switch (action.type) {
        case "RECEIVE_ERASMUSLIST": return action.erasmusList
        default: return state
    }
}

export default erasmusList;
