import React from 'react'
import { connect } from 'react-redux'
import { fetchErasmusList } from '../actions'

const Form = ({onClick}) => (

    <form onSubmit={
            e => {
                e.preventDefault()
                onClick()
            }
        }>

        <button type="submit">
            Refresh
        </button>
    </form>
)

const mapDispatchToProps = dispatch => ({
    onClick: () => {
        dispatch(fetchErasmusList())
    }
})

const RefreshButton = connect(null, mapDispatchToProps)(Form);

export default RefreshButton
