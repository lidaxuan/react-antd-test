/* jshint esversion: 6 */
/*
 * @Description
 * @version: 
 * @Author: 李继玄（lijixuan@quclouds.com）
 * @Date: 2020-08-27 15:01:43
 * @LastEditors: 李继玄（lijixuan@quclouds.com）
 * @LastEditTime: 2020-09-03 09:51:15
 * @FilePath: /test/src/views/dashboard/Index.js
 */
import React, { Component } from 'react';
const name = '李大玄';
var a = <h1>{name}</h1>;
function Hellow(props) {
	return <div>
		<p>姓名:{props.name} </p>
		<p>年龄:{props.age}</p>
	</div>
}
class Index extends Component {
	state={
		time: ''
	}
	tick() {
		var time  = new Date().toLocaleTimeString();
		let element =  <div>
			<h1>今天是{time}</h1>
		</div>
		this.setState({
			time: element
		})
	}
	
	componentWillMount() {
		const that = this;
		setInterval(() => {
			that.tick()
		}, 1000);
	}
	render() {
		return (
			<div className="shadow-radius">
				<div>{a}</div>
				<div>{this.state.time}</div>
				<Hellow name="李大玄" age="19"/>
				<hr></hr>
				<div >
					asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直
					asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直
					asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直
					asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直
					asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直asd阿萨德sa说不出的风格hi捷克罗姆弄破嵌入式图我想一直
				</div>
			</div>
		);
	}
}

export default Index;
