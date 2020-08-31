/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-27 14:59:11
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-08-28 15:20:45
 * @FilePath: /test/src/router/index.js
 */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from '@/views/Login';
import AuthRouter from '@/views/auth/AuthRouter';
import Layout from '@/views/layout/Index';


const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route component={Login} exact path="/login" />
        {/* <Route component={Layout} path="/" /> */}
        <AuthRouter path="/" component={Layout} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
