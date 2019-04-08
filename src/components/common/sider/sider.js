import React from 'react';

//连接redux
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'


import siderCss from './sider.module.scss'
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;



class MySider extends React.Component{

    componentWillMount(){
        this.props.getMenu();
    }

    getCookie(name){
        var str = document.cookie;
        var arr = str.split("; ");
        for(let i = 0; i < arr.length; i++){
            var arr1= arr[i].split("=")
            if(arr1[0] == name){
                return arr1[1];
            }
        }
    }


    render(){
        let {list,count} = this.props
        // console.log(this.props)
        console.log(document.cookie)
        return (
            <Sider
                breakpoint="lg"
                onBreakpoint={(broken) => { console.log(broken); }}
                onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                collapsible
            >
                <div className={siderCss.logo}>
                    <h2>
                        {
                            count.nik ? count.nik : this.getCookie("nik")
                        }
                    </h2>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    {
                        list &&
                        list.map(val=>{
                            if(!val.children){
                                return (
                                    <Menu.Item key={val.id}>
                                        <Link to = {val.to}>
                                            <Icon type={val.icon} />
                                            <span className="nav-text">{val.name}</span>
                                        </Link>
                                    </Menu.Item>
                                )
                            }else{
                                return (
                                    <SubMenu
                                        key={val.id}
                                        title={<span><Icon type={val.icon} /><span>{val.name}</span></span>}
                                    >
                                    {val.children.map(vall=>{
                                       return (
                                            <Menu.Item key={vall.id}>
                                                <Link to = {vall.to}>
                                                    <Icon type={vall.icon} />
                                                    <span className="nav-text">{vall.name}</span>
                                                </Link>
                                            </Menu.Item>
                                       ) 
                                    })}
                                    </SubMenu>
                                )
                            }
                        })
                    }

                </Menu>
            </Sider>
        )
    }
}




const mapStateToProps = (state,props)=>{
    // console.log(state.menuData)
    return{
        list : state.menuData,
        count : state.count
    }
   
    
}
const mapDispatchToProps = (dispatch,props)=>{
    return {
        getMenu : ()=>{
            fetch(
                "/data/menudata.json"
            ).then(res=>res.json()
            ).then(data=>{
                dispatch({type : "MENU", payload : data})
            })
            dispatch({type : "MENU", payload : null})
        }
    }
}

const container = connect(mapStateToProps,mapDispatchToProps)(MySider)




export default container;