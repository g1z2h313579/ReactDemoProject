import React from 'react';

import { AnimatedSwitch } from 'react-router-transition';
import Switch from 'react-router-transition-switch'
import Fader from 'react-fader'

//路由配置
import { Route } from 'react-router-dom';
import One from '../../parts/one/one';
import Two from '../../parts/two/two';
import Three from '../../parts/three/three';
import Four from '../../parts/four/four';
import Five from '../../parts/five/five';
import Six from '../../parts/six/six';
import Seven from '../../parts/seven/seven';
import Eight from '../../parts/eight/eight';


import { Layout } from 'antd';

const {Content} = Layout


class MyContent extends React.Component{
    render(){
        return (
            <Content style={{ margin: '24px 16px 0',height : "100%" }}>
                <div style={{ padding: 24, background: '#fff',height : "100%" }}>
                    <Switch component={Fader}>
                        <Route path = "/one" component = {One} key = "1"></Route>
                        <Route path = "/two" component = {Two} key = "1"></Route>
                        <Route path = "/three" component = {Three} key = "3"></Route>
                        <Route path = "/four" component = {Four} key = "4"></Route>
                        <Route path = "/five" component = {Five} key = "5"></Route>
                        <Route path = "/six" component = {Six} key = "6"></Route>
                        <Route path = "/seven" component = {Seven} key = "7"></Route>
                        <Route path = "/eight" component = {Eight} key = "8"></Route>
                        
                    </Switch>
                
                </div>
            </Content>
        )
    }
}

export default MyContent;