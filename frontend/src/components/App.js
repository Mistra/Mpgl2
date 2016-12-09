import React from 'react';
import VisibleErasmus from '../containers/VisibleErasmus'
//import RefreshButton from '../containers/RefreshButton'
import FilterForm from '../containers/FilterForm'

const App = () => (
    <div>
        <h1>Watch my table</h1>
        {/**<RefreshButton/>*/}
        <FilterForm/>
        <VisibleErasmus/>
    </div>
)

export default App;
