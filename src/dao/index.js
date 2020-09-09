/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-13 14:32:26
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-09-03 10:03:23
 * @FilePath: /test/src/dao/index.js
 */
import axios from 'axios';
import { Component } from 'react';
// import ReactDOM from 'react-dom';
import sefaSet from '@lijixuan/safe-set';

import { headers } from './headers';
import _ from 'lodash';
import { message } from 'antd';
axios.defaults.baseURL = "http://devyiliapi.quclouds.com";
// const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
// 请求前拦截
axios.interceptors.request.use(
  config => {
    // var dom = document.createElement('div');
    // dom.setAttribute('id', 'loading');
    // document.body.appendChild(dom)
    // ReactDOM.render(<Spin wrapperClassName='react-loadings' size="large" tip="加载中...">
    // </Spin>, dom)
    _.each(headers(), (value, key) => {
      sefaSet(config, `headers.${key}`, value);
    });
    return config;
  },
  err => {
    message.warning("请求超时");
    return Promise.reject(err);
  }
);

// 返回后拦截
axios.interceptors.response.use(
  data => {
    console.log(data);
    if (data.status === 200) {
      // document.body.removeChild(document.getElementById('loading'))
      let res = data.data;
      //请求状态判断
      if (res.code === 10000) {
        return res
      } else {
        return message.warning(res.msg)
      }
    } else {
      return Promise.reject(data);
    }
  },
  err => {
    return Promise.reject(err);
  }
);
Component.prototype.$axios = axios;
export default axios;