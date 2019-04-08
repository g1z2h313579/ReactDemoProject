import React from 'react';
import { Layout } from 'antd';

const {Header} = Layout

class MyHeader extends React.Component{
    render(){
        return (
            <Header style={{ background: '#fff', padding: 0 }} />
        )
    }
}

export default MyHeader;