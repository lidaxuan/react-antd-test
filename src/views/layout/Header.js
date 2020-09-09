/* jshint esversion: 6 */
/*
 * @Description: from 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-28 09:33:33
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-09-03 10:06:46
 * @FilePath: /test/src/views/layout/Header.js
 */
import React from 'react';
import logo from '@/assets/images/logo192.png';
import { message } from 'antd';
import '@/assets/style/layout/layout.scss';

class Header extends React.Component {
  
  logOut() {
    message.success('成功退出');
    localStorage.setItem('isLogin', '');
    window.location.hash = '#/login'
  };
  render() {
    return (
      <div className="header">
        <div className="left">
          <img className="logo mr10" src={logo} alt=""></img>
          <span>后台管理系统</span>
        </div>
        <div className="right">
          <span className="mr10">李大玄</span>
          <span onClick={this.logOut.bind(this)}>退出</span>
        </div>
      </div>
    )
  }
}
export default Header;