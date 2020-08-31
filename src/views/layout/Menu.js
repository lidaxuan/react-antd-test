/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-27 17:35:14
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-08-28 14:43:24
 * @FilePath: /test/src/views/layout/Menu.js
 */
import React from 'react';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import list from '@/router/menus';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
class Sider extends React.Component {
  handClickTag = e => {
    console.log('click ', e);
  };// 递归渲染菜单
	renderMenu = data => {
		return data.map(item => {
			if (item.children) {
				return (
					 (
						<SubMenu
							key={item.path}
							title={
								<span>
									<span>{item.title}</span>
								</span>
							}
						>
							{this.renderMenu(item.children)}
						</SubMenu>
					)
				);
			} else {
        return (
           (
            <Menu.Item key={item.path}>
              <Link to={item.path} onClick={() => this.handClickTag(item)}>
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          )
        );
      }
		});
	};

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256, flex: 'none' }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        {this.renderMenu(list.menus)}
      </Menu>
    );
  }
}
export default Sider;