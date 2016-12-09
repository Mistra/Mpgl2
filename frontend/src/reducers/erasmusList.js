
const erasmus = (state, action) => {
    switch (action.type) {
        case "ADD_ERASMUS": return action.erasmus
        default: return state
    }
}

const addErasmus = (state, action) => ([
    ...state,
    erasmus(undefined, action)
])

const erasmusList = (state=[], action) => {
    switch (action.type) {
        case "ADD_ERASMUS": return addErasmus(state, action)
        case "RECEIVE_ERASMUSLIST": return action.erasmusList
        default: return state
    }
}

export default erasmusList;
