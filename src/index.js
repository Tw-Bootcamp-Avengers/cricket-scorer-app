import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CricketGame from '../src/main/cricketGame/CricketGame';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {mainReducer} from './main/mainReducer'
const store = createStore(mainReducer);


ReactDOM.render(<Provider store = {store}>
    <CricketGame/>
    </Provider>,document.getElementById('root')
);
serviceWorker.unregister();
