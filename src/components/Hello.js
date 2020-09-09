/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-09-03 10:00:36
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-09-03 10:54:05
 * @FilePath: /test/src/components/Hello.js
 */
import React from 'react';

class Hello extends React.Component {
  constructor(props) {
    console.log('初始化阶段');
    super(props);
    /* 初始化阶段 */
    this.state = {
      name: '李大玄',
      age: 18
    };
    this.updateUserBind = this.updateUserBind.bind(this);
  }
  /* 页面加载之前  一般进行ajax */
  componentWillMount() {
    console.log('页面加载之前  一般进行ajax');
  }
  /* 组件加载后 */
  componentDidMount() {
    console.log('组件加载后');
  }

  state= {
    
  }
  /**
   * 当点击按钮更新数据的时候, 会执行 shouldComponentUpdate 然后执行 render
   */
  updateUser = () => {
    console.log(this);
    this.setState({
      name: '李继玄',
      age: '19'
    })
  }
  updateUserBind() {
    console.log(this);
  }
  shouldComponentUpdate() {
    console.log('数据是否需要更新');
    /**
     * true 更新
     * false 不更新
     */
    return true;
  }
  render() {
    /* 组件加载或者数据更新  会执行 reader 方法  */
    console.log('组件加载或者数据更新  会执行 reader 方法');
    return <div>
        我叫{this.state.name}, 今年{this.state.age}了
        <button onClick={this.updateUser}>数据更新</button>
        <button onClick={this.updateUserBind}>数据更新bind</button>
        <hr></hr>
      </div>
  }
};
export default Hello;