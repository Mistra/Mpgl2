import React from 'react'

const AddErasmusForm = ({onSubmit}) => {
    let nameInput
    let surnameInput
    let emailInput
    let birthdayInput
    let nationalityInput
    let mobileInput
    let esncardInput
    let facultyInput
    let uni_idInput
    let registration_dateInput
    let cityInput

    return (
        <form onSubmit={e => {
                e.preventDefault()
                onSubmit(({
                    name: nameInput.value,
                    surname: surnameInput.value,
                    email: emailInput.value,
                    birthday: birthdayInput.value,
                    nationality: nationalityInput.value,
                    mobile: mobileInput.value,
                    esncard: esncardInput.value,
                    faculty: facultyInput.value,
                    uni_id: uni_idInput.value,
                    registration_date: registration_dateInput.value,
                    city: cityInput.value
                }))
                nameInput.value = ''
                surnameInput.value = ''
                emailInput.value = ''
                birthdayInput.value = ''
                nationalityInput.value = ''
                mobileInput.value = ''
                esncardInput.value = ''
                facultyInput.value = ''
                uni_idInput.value = ''
                registration_dateInput.value = ''
                cityInput.value = ''
            }}>
            <input ref={node => nameInput = node}/>
            <input ref={node => surnameInput = node}/>
            <input ref={node => emailInput = node}/>
            <input ref={node => birthdayInput = node}/>
            <input ref={node => nationalityInput = node}/>
            <input ref={node => mobileInput = node}/>
            <input ref={node => esncardInput = node}/>
            <input ref={node => facultyInput = node}/>
            <input ref={node => uni_idInput = node}/>
            <input ref={node => registration_dateInput = node}/>
            <input ref={node => cityInput = node}/>

            <button type="submit">
                Add Erasmus
            </button>
        </form>
    )
}

export default AddErasmusForm
