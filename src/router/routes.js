/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-27 15:00:55
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-09-03 11:34:39
 * @FilePath: /test/src/router/routes.js
 */
import Dashboard from '@/views/dashboard/Index';
import life from '@/views/life/index';
import comp from '@/views/comp/index';
import icon from '@/views/Icon';


export const routes = [
	{ path: '/', component: Dashboard },
	{ path: '/icon', component: icon },
	{ path: '/dashboard', component: Dashboard },
	{ path: '/life', component: life },
	{ path: '/comp', component: comp },
	
];
