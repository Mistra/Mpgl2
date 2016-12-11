import React, { PropTypes } from 'react';

const Table = ({erasmusList, deleteErasmusById}) => (
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Subscription Date</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            {erasmusList.map(erasmus => (
                <tr key={erasmus.id}>
                    <td>{erasmus.id}</td>
                    <td>{erasmus.name}</td>
                    <td>{erasmus.surname}</td>
                    <th>{erasmus.registration_date}</th>
                    <td>
                        <button
                            onClick={() => deleteErasmusById(erasmus.id)}
                            >
                            x
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
)

Table.propTypes = {
    erasmusList: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired
}

export default Table
