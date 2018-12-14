import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/colorform/redux/App';
import storeFactory from './components/colorform/redux/store/storeFactory';
import * as serviceWorker from './serviceWorker';

const store = storeFactory();
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
