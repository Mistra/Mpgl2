import { connect } from 'react-redux'
import React from 'react'
import Table from '../components/Table'
import { fetchErasmusListIfNeeded } from '../actions'

const Message = ({text}) => (
    <p>{text}</p>
)

class VisibleErasmus extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchErasmusListIfNeeded)
    }

    render() {
        const {erasmusList, loading, fetched} = this.props
        if(loading) return <Message text="Loading..."/>
        if(fetched && erasmusList.length !== 0) return <Table erasmusList={erasmusList}/>
        return <Message text="Nothing to be seen... yet!"/>
    }
}

const filterErasmusByName = (erasmusList, filter) => (
    erasmusList.filter(erasmus => erasmus.name.includes(filter))
)

const mapStateToProps = state => ({
    erasmusList: filterErasmusByName(state.erasmusList, state.nameFilter),
    loading: state.erasmusFetch.listFetching,
    fetched: state.erasmusFetch.listFetched
})

export default connect(mapStateToProps)(VisibleErasmus)
