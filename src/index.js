import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './List';
import Api from './Api';
import Clock from './Clock';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Api/>, document.getElementById('api'));
ReactDOM.render(<Clock/>, document.getElementById('clock'));
//ReactDOM.render(<List/>, document.getElementById('list'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
