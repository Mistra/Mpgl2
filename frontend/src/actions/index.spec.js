import * as actions from './index'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('erasmusList actions', () => {
    afterEach(() => {
        nock.cleanAll()
    })
    const testErasmus = {
        id: 0,
        name: 'Foo',
        surname: 'Bar'
    }

    const testList = [testErasmus]

    it('dispatches correctly receiveErasmusList', () => {
        expect(actions.receiveErasmusList(testList)).toEqual(
            {
                type: "RECEIVE_ERASMUSLIST",
                erasmusList: testList
            }
        )
    })

    it('dispatches correctly addErasmus', () => {
        expect(actions.addErasmus(testErasmus)).toEqual(
            {
                type: "ADD_ERASMUS",
                erasmus: testErasmus
            }
        )
    })

    it('fetchErasmusListIfNeeded', () => {
        const dispatch = () => {}
        let getState = () => ({
            erasmusFetch: {
                listFetched: false,
                listFetching: false,
                listFetchError: null
            }
        })
        expect(actions.fetchErasmusListIfNeeded(dispatch, getState)).toEqual(
            actions.fetchErasmusList(dispatch)
        )
        getState = () => ({
            erasmusFetch: {
                listFetched: true,
                listFetching: false,
                listFetchError: null
            }
        })
        expect(actions.fetchErasmusListIfNeeded(dispatch, getState)).toEqual(
            undefined
        )
    })

    /*
    it('loads correcly with fetchErasmusList', () =>{
        nock('http://localhost:8080/')
        .get('/api/erasmus')
        .reply(200, { body: [{name: 'test'}]})

        const expectedActions = [
            { type: 'FETCH_ERASMUSLIST '},
            { type: 'RECEIVE_ERASMUSLIST', body: [{name: 'test'}] }
        ]
        const store = mockStore({ erasmusList: [] })

        return store.dispatch(actions.fetchErasmusList())
        .then(() => { // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })*/
})
