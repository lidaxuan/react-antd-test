/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-28 15:38:41
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-09-03 11:28:59
 * @FilePath: /test/src/views/life/index.js
 */
import React, { Component } from 'react';
import { getList } from '@/model/test';
import { Table } from 'antd';
import Hello from '@/components/Hello';

class Index extends Component {
	state = {
		tableList: [],
		columns: [
			{ title: 'a', dataIndex: 'bid', width: 150, align: "center" },
			{ title: 'b', dataIndex: 'cpmNum', width: 150, align: "center" },
			{ title: 'c', dataIndex: 'dealId', width: 150, align: "center" },
			{ title: 'd', dataIndex: 'dealType', width: 150, align: "center" },
			{ title: 'e', dataIndex: 'departmentId', width: 150, align: "center" },
		],
	};
	
	componentWillMount() {
		this.fetch();
	}

	componentWillUnmount() {
		// componentWillMount进行异步操作时且在callback中进行了setState操作时，需要在组件卸载时清除state
		this.setState = () => {
			return;
		};
	}
	async fetch () {
		const res = await getList();
		this.setState({
			tableList: [].concat(res.data) || [],
		});
	};
	
	render() {
		return (
			<div className="shadow-radius">
				
				<Hello/>
				<Table columns={this.state.columns} rowKey={(record, index) => index} bordered dataSource={this.state.tableList} scroll={{ y: 240 }} />
			</div>
		);
	}
}

export default Index;

