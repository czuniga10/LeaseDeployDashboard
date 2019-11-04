import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.css';
import App from './App';

ReactDOM.render(

    <Router onUpdate={() => window.scrollTo(0, 0)}  history={createBrowserHistory()}>
        <App />
    </Router>
,
document.getElementById('root'));

