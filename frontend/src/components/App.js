import React from 'react';
import VisibleErasmus from '../containers/VisibleErasmus'
//import RefreshButton from '../containers/RefreshButton'
import FilterForm from '../containers/FilterForm'
import AddErasmus from '../containers/AddErasmus'

const App = () => (
    <div>
        <h1>Watch my table</h1>
        {/**<RefreshButton/>*/}
        <FilterForm/>
        <VisibleErasmus/>
        <AddErasmus/>
    </div>
)

export default App;
