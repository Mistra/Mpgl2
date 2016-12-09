import * as actions from './index'
import nock from 'nock'

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

    it('loads correcly with fetchErasmusList', () =>{
        nock('http://localhost:8080')
        .get('/api/erasmus')
        .reply(200, { body: { erasmus: [] }})
    })
})
