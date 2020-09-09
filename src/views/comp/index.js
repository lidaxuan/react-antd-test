/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-09-03 11:34:13
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-09-03 14:16:48
 * @FilePath: /test/src/views/comp/index.js
 */
import React, { Component } from 'react';
import Login from '@/components/Login';
import Logout from '@/components/Logout';
import { Button } from 'antd';
class Index extends Component {
	state = {
		tableList: [],
    isLogin: true,
    login: '',
    logout: '',
	};
  
  chageData = () => {
    this.setState({
      isLogin: !this.state.isLogin
    });
  }
  getSonFn = () => {
    this.state.login.getList();
  }
  onRef = (val, ref) => {
    console.log(val, ref);
    switch (val) {
      case 'login':
        this.state.login = ref
        break;
      case 'logout':
        this.state.logout = ref
        break;
      default:
        break;
    }
  }
	
	render() {
    const { isLogin } = this.state;
		return (
			<div className="shadow-radius">
        
        <Button type="primary" onClick={ this.getSonFn } className="mr20">调子组件方法</Button>
        <Button type="primary" onClick={ this.chageData } className="mr20">子组件给父组件传值</Button>
        <Button type="primary" onClick={ this.chageData }>切换组件</Button>
				{isLogin ?  <Login onRef={this.onRef}/> : <Logout onRef={this.onRef}/> }
        
			</div>
		);
	}
}

export default Index;

