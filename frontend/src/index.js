// Important Things //
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import assasseryFrontend from './reducers';

// CSS Stylesheets //
import './assets/css/index.css';
import './assets/css/nav.css';

// Pages //
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import QRGenerator from './pages/QRGenerator';
import QRScanner from './pages/QRScanner';
// import NotFound from './pages/NotFound';

// Images //
import AssasseryLogo from './assets/images/assassery_dark_logo.png';

let store = createStore(assasseryFrontend);

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div class="navbar">
            <ul>
                <li><Link to={`/login`}>LOGIN</Link></li>
                <li><Link to={`/scan`}>QR SCANNER</Link></li>
                <li><Link to={`/qr`}>YOUR QR CODE</Link></li>
                <div class="logo">
                    <Link to={`/`}><img height="50" src={AssasseryLogo} alt={"Logo is missing!"}/></Link>
                </div>
            </ul>
        </div>

        <div class="main">
            <main>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/qr" component={QRGenerator}/>
                    <Route path="/scan" component={QRScanner}/>
                    {/*<Route component={NotFound} />*/}
                </Switch>
            </main>
        </div>
    </Router>
    </Provider>,
    document.getElementById('app')
);
