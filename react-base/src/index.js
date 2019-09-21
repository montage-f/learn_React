import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';

import AntDTodoList from './view/AntDTodoList';
import {Provider} from 'react-redux';

const App = (
    <Provider store={store}>
        <AntDTodoList />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
