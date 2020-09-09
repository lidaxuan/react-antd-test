/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-09-03 11:29:08
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-09-03 14:13:55
 * @FilePath: /test/src/components/Login.js
 */
import React from 'react';
class Login extends React.Component {
  getList = () => {
    console.log('这是子组件');
  }
  componentWillMount() {
    this.props.onRef('login', this);
  }
  render() {
    return <div>login</div>
  }
}
export default Login;