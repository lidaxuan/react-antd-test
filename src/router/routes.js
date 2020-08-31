/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-27 15:00:55
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-08-28 16:07:15
 * @FilePath: /test/src/router/routes.js
 */
import Dashboard from '@/views/dashboard/Index';
import icon from '@/views/Icon';


export const routes = [
	{ path: '/', component: Dashboard },
	{ path: '/icon', component: icon },
	{ path: '/dashboard', component: Dashboard },
	
];
