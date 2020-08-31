/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-27 17:12:35
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-08-31 10:19:26
 * @FilePath: /test/src/views/layout/Index.js
 */
import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';
import MainContent from './MainContent';
import '@/assets/style/layout/layout.scss';

class Layout extends Component{
  render(){
    return(
			<div>
				<Header/>
				<div className="context">
					<Menu className="menu"/>
					<MainContent className="MainContent"/>
				</div>
			</div>
		);
  };
};
export default Layout;