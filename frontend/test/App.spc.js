import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';
import store from '../src/redux/Store';

const foo = () => {
    return {
        type: "RECEIVE_ERASMUS",
        payload: {
            text: "Wiskey"
        }
    }
}

describe('erasmusListActions', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('loads erasmusList', () => {
        store.dispatch(foo());
        expect(store.getState().erasmusList).toEqual([{name: "aglio"}]);

    });
});
