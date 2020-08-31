/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-31 11:33:55
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-08-31 12:06:30
 * @FilePath: /test/src/model/test/index.js
 */
import axios from '@/dao';

export function getList(params) {
  return axios.get('/deal/list',params);
}