import erasmusList from './erasmusList'

describe('erasmusList reducer', () => {
    it('handles initial state', () => {
        expect(
            erasmusList(undefined, {})
        ).toEqual([])
    })

    const testList = [{
        id: 0,
        name: 'Foo',
        surname: 'Bar'
    }]

    it('handles receiving', () => {
        expect(
            erasmusList(
                undefined,
                {
                    type: "RECEIVE_ERASMUSLIST",
                    erasmusList: testList
                }
            )
        ).toEqual(testList)
    })

    it('adds an erasmus', () => {
        const testErasmus = {
            id: 1,
            name: "Name",
            surname: "Surname"
        }
        expect(
            erasmusList(
                undefined,
                {
                    type: "ADD_ERASMUS",
                    erasmus: testErasmus
                }
            )
        ).toEqual([testErasmus])
    })

    it('deletes an erasmus by id', () => {
        const initialState = [
            { id: 1, other: 'other' },
            { id: 2, other: 'other2' }
        ]
        expect(
            erasmusList(
                initialState,
                {
                    type: "DELETE_ERASMUS",
                    id: 1
                }
            )
        ).toEqual( [{ id: 2, other: 'other2' }] )
    })
})
