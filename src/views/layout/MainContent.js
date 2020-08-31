/* jshint esversion: 6 */
/*
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-28 11:31:30
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-08-28 16:14:10
 * @FilePath: /test/src/views/layout/MainContent.js
 */
import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { routes } from '@/router/routes';
import { Layout } from 'antd';
const { Content } = Layout;

const MainContent = ({ location }) => {
	return (
			<Content style={{ padding: '15px', flex: '1' }}>
				<HashRouter>
					<Switch>
						{routes.map(ele => <Route render={() => <ele.component />} exact key={ele.path} path={ele.path} />)}
						<Redirect from="/" exact to="/dashboard" />{/*  */}
						<Redirect to="/error/404" />
					</Switch>
				</HashRouter>
			</Content>
	);
};

export default MainContent;
