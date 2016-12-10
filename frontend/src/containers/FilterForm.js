import React from 'react'
import { connect } from 'react-redux'
import { setNameFilter } from '../actions'

const FilterForm = ({onClick}) => {
    let input
    return (
        <input
            onChange={() => onClick(input.value)}
            ref={node => input = node}
            />
    )
}

const mapDispatchToProps = filter => dispatch => ({
    onClick: (filter) => {
        dispatch(setNameFilter(filter))
    }
})

export default connect(null, mapDispatchToProps)(FilterForm)
