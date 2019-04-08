import React from 'react';
import MView from './parts/mainView/mainView'

import { Route,Switch } from 'react-router-dom'

import Login from './login/login'

class Main extends React.Component{
    render(){
        return (
            <div className = "main-warp">
                <Switch>
                    <Route path = "/login" component = {Login}/>    
                    <Route path = "/" component = {MView}/>
                </Switch>
                {/* <MView></MView> */}
            </div>
        )
    }
}

export default Main;