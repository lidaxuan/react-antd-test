/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-27 15:09:41
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-09-01 10:18:05
 * @FilePath: /test/src/views/Login.js
 */
import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '@/assets/login.css';
import { message } from 'antd';

const FormItem = Form.Item;

const onFinishFailed = errorInfo=> {
	console.log('Failed:', errorInfo);
};


class Login extends Component {
	state = { 
		clientHeight: document.documentElement.clientHeight || document.body.clientHeight,
		username: 1,
		password: 1
	};
	componentWillMount() {
		
	}
	constructor(props) {
		super(props);
		this.onResize = this.onResize.bind(this);
	}
	handleOnFinish  = values => {
		console.log('Success:', values);
		message.success('登录成功');
		localStorage.setItem('isLogin', '1');
		this.props.history.push('/dashboard');
	};
	onResize() {
		this.setState({ clientHeight: document.documentElement.clientHeight || document.body.clientHeight });
	}
	render() {
		return (
			<div className="container">
				<div className="content">
					<div className="title">后台管理系统</div>
					<Form className="login-form"
						name="basic"
						initialValues={{ remember: true }}
						onFinish={this.handleOnFinish}
						onFinishFailed={onFinishFailed}
					>
						<FormItem label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
							<Input defaultValue={this.state.username} prefix={<UserOutlined></UserOutlined>} placeholder="用户名" />
						</FormItem>
						<FormItem label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
							<Input.Password defaultValue={this.state.password} prefix={<UserOutlined></UserOutlined>} placeholder="密码" />
						</FormItem>
						<FormItem>
							<Button type="primary" htmlType="submit" block>
								登录
							</Button>
							<div style={{ color: 'red',paddingTop:'10px',textAlign:'center' }}>Tips : 输入任意用户名密码即可</div>
						</FormItem>
					</Form>
				</div>
			</div>
		);
	}
}

// const mapStateToProps = state => state;
// const mapDispatchToProps = dispatch => ({
// 	setUserInfo: data => {
// 		dispatch(setUserInfo(data));
// 	}
// });
export default Login;
