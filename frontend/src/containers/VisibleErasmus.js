import { connect } from 'react-redux'
import React from 'react'
import Table from '../components/Table'
import { fetchErasmusListIfNeeded, remoteDeleteErasmus } from '../actions'

const Message = ({children}) => (
    <p>{children}</p>
)

class ErasmusTable extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchErasmusListIfNeeded)
    }

    render() {
        return <DynamicTable
            erasmusList={this.props.erasmusList}
            deleteErasmusById={this.props.deleteErasmusById}
            />
    }
}

// Question: is it really worthy splitting ErasmusTable and DTable in 2
// different components?
// Could DynamicTable be general? aka (Comp1, Comp2, condition)

// Possible answer: yes... one handles the loading, the other
// handles the selection logic. Both could increase.

const DynamicTable = ({erasmusList, deleteErasmusById}) => {

    const tableIsEmpty = () => (
        erasmusList.length === 0
    )

    if (tableIsEmpty()) return <Message>No data to show!</Message>
    return <Table
        erasmusList={erasmusList}
        deleteErasmusById={deleteErasmusById}
        />
}

const filterErasmusByName = (erasmusList, filter) => (
    erasmusList.filter(erasmus => erasmus.name.includes(filter))
)

const mapStateToProps = state => ({
    erasmusList: filterErasmusByName(
        state.erasmusList,
        state.nameFilter
    )
})

const mapDispatchToProps = id => dispatch => ({
    dispatch,
    deleteErasmusById: (id) => (
        dispatch(remoteDeleteErasmus(id))
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(ErasmusTable)
