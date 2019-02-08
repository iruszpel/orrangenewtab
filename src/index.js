import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route } from "react-router-dom";
import asyncComponent from './AsyncComponent'
const Setup = asyncComponent(() =>
    import('./Setup').then(module => module.default)
)
const Main = asyncComponent(() =>
    import('./Main').then(module => module.default)
)
ReactDOM.render(
    <Router>
        <div>

            <Route exact path="/" component={Main} />
            <Route path="/setup" component={Setup} />
        </div>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
