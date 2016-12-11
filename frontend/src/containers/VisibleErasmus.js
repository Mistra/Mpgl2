import { connect } from 'react-redux'
import React from 'react'
import Table from '../components/Table'
import Message from '../components/Message'
import { fetchErasmusListIfNeeded, remoteDeleteErasmus } from '../actions'

// It handles to loading of the erasmus list
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

// It handles the logic of what to display
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
