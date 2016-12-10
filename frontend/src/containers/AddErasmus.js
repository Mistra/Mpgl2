import { connect } from 'react-redux'
import { uploadErasmus } from '../actions'
import AddErasmusForm from '../components/AddErasmusForm'

const mapDispatchToProps = erasmus => dispatch => ({
    onSubmit: (erasmus) => {
        dispatch(uploadErasmus(erasmus))
    }
})

export default connect(null, mapDispatchToProps)(AddErasmusForm)
