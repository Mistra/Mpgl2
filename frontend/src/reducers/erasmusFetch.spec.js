import erasmusFetch from './erasmusFetch'

describe('erasmusFetch reducer', () => {
    it('handles initial state', () => {
        expect(
            erasmusFetch(undefined, {})
        ).toEqual({
            listFetched: false,
            listFetching: false,
            listFetchError: null
        })
    })

    it('handles fetching', () => {
        expect(
            erasmusFetch(
                undefined,
                {
                    type: "FETCH_ERASMUSLIST"
                }
            )
        ).toEqual({
            listFetched: false,
            listFetching: true,
            listFetchError: null
        })
    })

    it('handles receiving', () => {
        expect(
            erasmusFetch(
                undefined,
                {
                    type: "RECEIVE_ERASMUSLIST"
                }
            )
        ).toEqual({
            listFetched: true,
            listFetching: false,
            listFetchError: null
        })
    })
})
