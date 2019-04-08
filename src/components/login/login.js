import React from 'react';

import * as c from 'history';

import { connect } from 'react-redux'

import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';
  
import login from './login.module.scss'

class Login extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        const history = c.createBrowserHistory()
        this.props.form.validateFields((err, values) => {
        //   console.log(err,values)//password,userName
            fetch(
                "/data/countlist.json"
            ).then(res=>res.json()
            ).then(data=>{
                let onoff = false
                data.forEach(val=>{
                    // console.log(val.userName,values.userName,val.passWord,values.password)
                    if(val.userName == values.userName && val.passWord == values.password){
                        onoff = true;
                        this.props.saveCount(val);
                        // console.log(document.cookie)
                        document.cookie = `nik=${val.nik}`;
                        this.props.history.push("/");

                    }
                })
                if(!onoff){
                    alert('wrong')
                }
            })
        });
      }
    
      render() {
        const { getFieldDecorator } = this.props.form;
        return (
          <Form onSubmit={this.handleSubmit} className={["login-form",login.mylog]}>
          <h1>Welcome to GZH's RcWeb</h1>
            <Form.Item>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        );
      }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);



const mapStateToProps = (state,props)=>{
  return {}
}

const mapDispatchToProps = (dispatch,props)=>{
  return {
    saveCount : (count)=>{
      dispatch({type : "SAVE_COUNT", payload : count})
    }
  }
}




const container = connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm)




// export default WrappedNormalLoginForm;
export default container;