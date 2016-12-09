import React, { PropTypes } from 'react';

const Table = ({erasmusList}) => (
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Surname</th>
            </tr>
        </thead>
        <tbody>
            {erasmusList.map(erasmus => (
                <tr key={erasmus.id}>
                    <td>{erasmus.id}</td>
                    <td>{erasmus.name}</td>
                    <td>{erasmus.surname}</td>
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
