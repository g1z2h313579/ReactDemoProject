import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/login/login';
//自定义
import {BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

//引入ui库
import 'antd/dist/antd.css';

ReactDOM.render(
<Provider store = { store }>
    <BrowserRouter>
        
    <Route component = {App}/>
        {/* <App /> */}
    </BrowserRouter>
</Provider>

, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
