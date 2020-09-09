/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-09-03 11:29:27
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-09-03 14:14:10
 * @FilePath: /test/src/components/Logout.js
 */
import React from 'react';
class Logout extends React.Component {

  componentWillMount() {
    this.props.onRef('logout', this);
  }
  render() {
    return <div>Logout</div>
  }
}
export default Logout;