/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-27 14:21:55
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-08-28 10:35:49
 * @FilePath: /test/src/App.js
 */
import React from 'react';
import './App.css';
import '@/assets/init.css';
import '@/assets/style/index.scss';
import Router from '@/router';

class App extends React.Component {
	render() {
		return (
      <Router />
		);
	}
}

export default App;
