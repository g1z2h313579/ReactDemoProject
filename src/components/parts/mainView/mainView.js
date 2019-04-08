import React from 'react';
import { Layout } from 'antd';
import MySider from '../../common/sider/sider';
import MyHeader from '../../common/header/header';
import MyContent from '../../common/content/content';
import MyFooter from '../../common/footer/footer';


  
class MainView extends React.Component{
    render(){
        return (
            <Layout>
               <MySider/>
                <Layout>
                    <MyHeader/>
                    
                    <MyContent/>

                    <MyFooter/>
                </Layout>
            </Layout>
        )
    }
}

export default MainView;