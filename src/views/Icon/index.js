/* jshint esversion: 6 */
/*
 * @Description: 
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-28 15:38:41
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-08-31 16:36:08
 * @FilePath: /test/src/views/Icon/index.js
 */
import React, { Component } from 'react';
import { getList } from '@/model/test';
import { Table } from 'antd';

class Index extends Component {
	state = {
		tableList: [],
		pagination: {},
		loading: false,
		selectedRowKeys: [],
		columns: [
			{ title: 'bid', dataIndex: 'bid', width: 150, align: "center" },
			{ title: 'cpmNum', dataIndex: 'cpmNum', width: 150, align: "center" },
			{ title: 'dealId', dataIndex: 'dealId', width: 150, align: "center" },
			{ title: 'dealType', dataIndex: 'dealType', width: 150, align: "center" },
			{ title: 'departmentId', dataIndex: 'departmentId', width: 150, align: "center" },
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
		console.log(res.data);
		this.setState({
			tableList: [].concat(res.data) || [],
		});
		console.log(this.state.tableList);
	};
	
	render() {
		return (
			<div className="shadow-radius">
				<Table columns={this.state.columns} rowKey={(record, index) => index} bordered dataSource={this.state.tableList} scroll={{ y: 240 }} />
			</div>
		);
	}
}

export default Index;

