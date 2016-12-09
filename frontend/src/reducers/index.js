import { combineReducers } from 'redux'
import erasmusList from './erasmusList'
import erasmusFetch from './erasmusFetch'
import nameFilter from './nameFilter'

const app = combineReducers({
    erasmusList,
    erasmusFetch,
    nameFilter
})

export default app;
