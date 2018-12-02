import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ColorsApp from './ColorsApp';
import MembersApp from './MembersApp';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<ColorsApp />, document.getElementById('root'));
ReactDOM.render(<MembersApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
