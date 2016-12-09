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
})
